import Component from "../../services/Component";

export default class Btn extends Component {
    render() {
        const anchor = `
            <a href={{anchorPath}} class={{className}}>
                {{msg}}
            </a>`;

        const button = `
            <button class={{className}}>
                {{msg}}
            </button>`;

        const tag = this._props.anchorPath ? anchor : button;
        return this.compile(tag);
    }
}