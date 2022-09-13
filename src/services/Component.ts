import { v4 as makeUUID } from 'uuid';
import Handlebars from 'handlebars';
import EventBus from './EventBus';
import { isEqual } from '../utils/isEqual';

export type TProps = Record<string, any>;

interface IPropsAndChilds {
    [unit: string]: string
};

export class Component {
    static EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_CDU: "flow:component-did-update",
        FLOW_RENDER: "flow:render"
    };

    public _props: TProps;
    public _children;
    public _id;
    public _element!: HTMLElement;
    public _meta;
    public _eventBus;

    constructor(tag = "div", propsAndChilds: TProps = {}) {

        const { children, props } = this.getChildren(propsAndChilds);

        this._eventBus = new EventBus();
        this._id = makeUUID();
        this._children = this.makePropsProxy(children);
        this._props = this.makePropsProxy({ ...props, __id: this._id });
        this._meta = { tag, props };

        this.registerEvents();
        this._eventBus.emit(Component.EVENTS.INIT);
    };

    private registerEvents() {
        this._eventBus.on(Component.EVENTS.INIT, this.init.bind(this));
        this._eventBus.on(Component.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        this._eventBus.on(Component.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        this._eventBus.on(Component.EVENTS.FLOW_RENDER, this._render.bind(this));
    };

    private init() {
        this._element = this.createDocumentElement(this._meta?.tag)
        this._eventBus.emit(Component.EVENTS.FLOW_RENDER);
    };

    public createDocumentElement(tag: string) {
        const element = document.createElement(tag);

        if (this._props.settings?.withInternalID)
            element.setAttribute('data-id', this._id);

        return element;
    };

    private _render(): void {
        const block = this.render();
        this.removeEvents();
        this._element.innerHTML = '';
        if (block !== undefined)
            this._element.appendChild(block);
        this.addEvents();
        this.addAttribute();
    };

    public render() { };

    public addEvents() {
        const { events = {} } = this._props;
        Object.keys(events).forEach(eventName => {
            this._element.addEventListener(eventName, events[eventName]);
        });
    };

    public removeEvents() {
        const { events = {} } = this._props;
        Object.keys(events).forEach(eventName => {
            this._element.removeEventListener(eventName, events[eventName]);
        });
    };

    public addAttribute() {
        const { attr = {} } = this._props;
        Object.entries(attr).forEach(([key, value]) => {

            this._element.setAttribute(key, value as string);
        });
    };

    public getChildren(propsAndChilds: TProps) {
        const children: IPropsAndChilds = {};
        const props: IPropsAndChilds = {};

        Object.keys(propsAndChilds).forEach(key => {
            if (propsAndChilds[key] instanceof Component)
                children[key] = propsAndChilds[key];

            else
                props[key] = propsAndChilds[key];
        });

        return { children, props };
    };

    public compile(template: string, props?: TProps) {

        if (typeof (props) === 'undefined')
            props = this._props;

        const propsAndStubs = { ...props };


        const fragment: HTMLElement = this.createDocumentElement('template');


        const childs: HTMLElement[] = [];
        let containerId: TProps = [];

        Object.entries(propsAndStubs).forEach(([key, list]) => {
            if (Array.isArray(propsAndStubs[key])) {
                containerId.push(propsAndStubs.__id)

                propsAndStubs[key] = `<div data-id="${propsAndStubs.__id}"></div>`;

                Object.entries(list).forEach(([, child]) => {
                    //является ли child "сложным"
                    if (child instanceof Component)
                        childs.push(child.getContent());
                });

            };
        });

        Object.entries(this._children).forEach(([key, child]) => {
            propsAndStubs[key] = `<div data-id="${child._id}"></div>`;
        });

        fragment.innerHTML = Handlebars.compile(template)(propsAndStubs);

        Object.values(this._children).forEach(child => {
            if (fragment instanceof window.HTMLTemplateElement) {
                const stub = fragment.content.querySelector(`[data-id="${child._id}"]`);

                if (stub)
                    stub.replaceWith(child.getContent());
            };
        });

        Object.entries(propsAndStubs).forEach(([key,]) => {
            if (containerId.includes(propsAndStubs[key])) {
                if (fragment instanceof window.HTMLTemplateElement) {
                    const stub = fragment.content.querySelector(`[data-id="${propsAndStubs[key]}"]`);
                    if (stub) {
                        childs.forEach(child => stub.appendChild(child));
                    };
                };
            };
        });

        if (fragment instanceof window.HTMLTemplateElement)
            return fragment.content;
    };


    private _componentDidMount() {
        this.componentDidMount();
        Object.values(this._children).forEach(child => child.dispatchComponentDidMount());
    };

    private componentDidMount() { };

    public dispatchComponentDidMount() {
        this._eventBus.emit(Component.EVENTS.FLOW_CDM);
        if (Object.keys(this._children).length)
            this._eventBus.emit(Component.EVENTS.FLOW_RENDER);
    };

    public _componentDidUpdate(oldProps: TProps, newProps: TProps) {

        const isReRender = this.componentDidUpdate(oldProps, newProps);

        if (!isReRender)
            this._eventBus.emit(Component.EVENTS.FLOW_RENDER);
    };

    public componentDidUpdate(oldProps: TProps, newProps: TProps) {
        return isEqual(oldProps, newProps);
    };

    public setProps(newProps: TProps) {
        if (!newProps) {
            return;
        };

        const { children, props } = this.getChildren(newProps);

        if (Object.values(children).length) {
            Object.assign(this._children, children);
        };

        if (Object.values(props).length) {
            Object.assign(this._props, props);
        };
    };


    public updatePropsForChilds(newProps: TProps) {

        if (!newProps) {
            return;
        };

        const childs = this._children;

        const { profile } = newProps;

        if (profile) { /* устанавливаем пропсы для для профиля пользователя  */
            Object.entries(childs).forEach(([, properties]) => {
                if (properties instanceof Component) {

                    Object.entries(properties['_children']).forEach(([childName, childProperty]) => {

                        // ищем вложеннные инпуты чтобы обновить в них значение из стора
                        if (childName === 'input' && childProperty instanceof Component) {
                            Object.entries(profile).forEach(([storeProperty, storeValue]) => {
                                // storeProperty - название поля из стора, storeValue - значение
                                // childName - имя дочернего компонента, childProperty - свойства дочернего компонета 

                                if (childProperty['_props']['name'] === storeProperty) {
                                    childProperty.setProps({ value: storeValue })
                                };
                            })
                        };
                    });
                };
            });
        };

    };


    private makePropsProxy(props: TProps) {

        return new Proxy(props, {
            get(target, prop: string) {
                const value = target[prop];
                return typeof value === "function" ? value.bind(target) : value;
            },

            set: (target: TProps, prop: string, value: unknown) => {
                const oldValue = { ...target };

                target[prop] = value;
                this._eventBus.emit(Component.EVENTS.FLOW_CDU, oldValue, target);
                return true;
            },

            deleteProperty: () => {
                throw new Error('Нет доступа');
            },

        });
    };

    show() {
        this.getContent().style.display = "flex";
    };

    hide() {
        this.getContent().style.display = "none";
    };

    public getContent() {
        return this._element;
    };
};
