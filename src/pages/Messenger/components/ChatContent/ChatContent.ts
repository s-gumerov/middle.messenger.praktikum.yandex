import { Component, TProps } from '../../../../services/Component';
import Handlebars from 'handlebars';
import { tpl } from './tpl';
import * as styles from './styles.module.sass';

export class ChatContent extends Component {

    render() {
        return this.compile(tpl);
    }

    compile(template: string, props?: TProps) {
        if (typeof (props) === 'undefined')
            props = this._props;

        const propsAndStubs = { ...props };

        const fragment: HTMLElement = this.createDocumentElement('template');

        const childs: HTMLElement[] = [];
        let containerId: TProps = [];

        Object.entries(propsAndStubs).forEach(([key, list]) => {
            if (Array.isArray(propsAndStubs[key])) {
                containerId.push(propsAndStubs.__id)

                propsAndStubs[key] = `<div class=${styles.itemChat_mesages} data-id="${propsAndStubs.__id}"></div>`;

                Object.entries(list).forEach(([i, child]) => {
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
            if (fragment instanceof HTMLTemplateElement) {
                const stub = fragment.content.querySelector(`[data-id="${child._id}"]`);

                if (stub)
                    stub.replaceWith(child.getContent());
            };
        });

        Object.entries(propsAndStubs).forEach(([key, child]) => {
            if (containerId.includes(propsAndStubs[key])) {
                if (fragment instanceof HTMLTemplateElement) {
                    const stub = fragment.content.querySelector(`[data-id="${propsAndStubs[key]}"]`);
                    if (stub) {
                        childs.forEach(child => stub.appendChild(child));
                    };
                };
            };
        });

        if (fragment instanceof HTMLTemplateElement)
            return fragment.content;
    };
}