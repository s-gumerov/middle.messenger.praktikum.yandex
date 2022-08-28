import { Component } from '../../services/Component';
import { tpl } from './tpl';

export class InputAndLabel extends Component {
    render() {
        return this.compile(tpl)
    }
}