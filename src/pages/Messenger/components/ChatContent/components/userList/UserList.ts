import { v4 as makeUUID } from 'uuid';
import { Component, TProps } from "../../../../../../services/Component";
import Handlebars from 'handlebars';
import { tpl } from "./tpl";
import { ChatUser } from "./components/ChatUser";
import { env } from '../../../../../../utils/env';
import { UserListProps } from "./interfaces";
import styles from './styles.module.sass';

const chatMembersList = () => document.querySelector(`.${styles.chatUserList}`) as HTMLElement;

export const showChatUsers = () => {
    chatMembersList()?.classList.contains(styles.chatUserList_hidden) ?
        chatMembersList()?.classList.remove(styles.chatUserList_hidden) :
        chatMembersList()?.classList.add(styles.chatUserList_hidden);
};

export class UserList extends Component {
    constructor(
        {
            users
        }: UserListProps
    ) {
        super(
            'div',
            {
                attr: {
                    class: `${styles.chatUserList} ${styles.chatUserList_hidden}`,
                    id: makeUUID()
                },
                list: users && users.map(user => {
                    return new ChatUser({
                        userId: `${user.id}`,
                        avatarPath: user.avatar ? `${env.HOST_RESOURCES}${user.avatar}` : 'https://www.meme-arsenal.com/memes/8fad74f2d563151e2be1fbc3b3aea87e.jpg',
                        userName: user.display_name ?? user.first_name,
                    })
                }),
                events: {
                    'mouseleave': showChatUsers
                }
            }
        )
    }

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

}