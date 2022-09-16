import { Component } from "../../../../../../../services/Component";
import { tpl } from "./tpl";
import * as styles from './styles.module.sass';
import { IChatMembersProps } from "./interfaces";
import { Avatar } from "../../../../../../../components/avatar/Avatar";
import { Btn } from "../../../../../../../components/btn/Btn";
import { deleteUser } from "../../../../../../../utils/deleteUser";
import { Actions } from "../../../../../../../Store";


export class ChatUser extends Component {
    constructor(
        {
            userId,
            avatarPath,
            userName
        }: IChatMembersProps) {
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
                            const target = e.target as HTMLElement
                            const userId = +target.id;
                            const { id } = Actions.getActiveChatState();
                            deleteUser(id, userId);
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
