import { Component } from "../../../../../../../services/Component";
import { tpl } from "./tpl";
import * as styles from './styles.module.sass';
import { IChatMembersProps } from "./interfaces";
import { Avatar } from "../../../../../../../components/avatar/Avatar";
import { Btn } from "../../../../../../../components/btn/Btn";

type TMouseEvent = MouseEvent & {
    path: Node[];
}

export class ChatUser extends Component {
    constructor({ userId, avatarPath, userName, deleteUser }: IChatMembersProps) {
        super(
            'div',
            {
                attr: {
                    class: styles.user,
                    id: userId
                },
                avatar: new Avatar({
                    alt: `${userName}-avatar`,
                    src: avatarPath,
                    figureClassName: styles.user__figure,
                    imgClassName: styles.figure__img,
                }),
                userName: userName,
                btn: new Btn(
                    {
                        id: userId,
                        msg: 'удалить',
                        className: styles.user__deleteBtn,
                        clickHandler: (e: Event) => {
                            const event = e as TMouseEvent
                            const chat = event.path[4] as HTMLDivElement
                            const target = e.target as HTMLElement
                            const userId = target.id
                            deleteUser(chat.id, userId);
                        },
                    }
                )
            }
        )
    }

    render() {
        return this.compile(tpl);
    }

}