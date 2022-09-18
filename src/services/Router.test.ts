import { expect } from 'chai';
import { Router } from './Router';
import { Component } from './Component';

describe('Router', () => {
    const router = new Router('root');

    class Page1 extends Component { }
    class Page2 extends Component { }
    class Page3 extends Component { }

    let callbackCounter: number = 0;

    router
        .use('/', Page1)
        .use('/about', Page2)
        .use('/blog', Page3)
        .start();

    it('Change route', () => {
        router.go('/');
        router.go('/about');
        expect(router.history.length).to.eq(15);
    });

    it('Get pathname', () => {
        router.go('/blog');

    });

    it('Call onRoute', () => {
        expect(callbackCounter).to.eq(0);
    });
});