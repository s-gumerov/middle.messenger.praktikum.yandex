import { expect } from 'chai';
import { Component } from './Component';

describe('Component', () => {

    let isComponentDidMount = false;
    let isComponentRender = false;

    interface IComponent {
        className?: string
    }

    class Block extends Component {
        constructor(props?: IComponent) {
            super('article', {
                attr: {
                    class: props?.className ?? 'defaultClass',
                    id: '001'
                }
                ,
            });
        }

        componentDidMount() {
            isComponentDidMount = true;
        }

        render() {
        }
    }

    it('Component did mount', () => {
        expect(isComponentDidMount).to.eq(false);
    });

    it('Component did render', () => {
        expect(isComponentRender).to.eq(false);
    });

});

