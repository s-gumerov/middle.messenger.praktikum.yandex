
import { Route } from "./Route";
import Component from "./Component";
import { signIn } from "../pages/SignIn";
import { profile } from "../pages/Profile";

export class Router {

    public routes!: Route[];
    public history!: History;
    private _currentRoute!: Route | null;
    private _rootQuery!: string;
    // private _pathnames: string[];
    // private _onRouteCallback: () => void;
    // private _unprotectedPaths: `/${string}`[];
    static __instance: Router;

    constructor(rootQuery: string) {
        if (Router.__instance) {
            return Router.__instance;
        }

        this.routes = [];
        this.history = window.history;
        this._currentRoute = null;
        this._rootQuery = rootQuery;

        Router.__instance = this;
    }

    public use(pathname: string, block: typeof Component) {
        const route = new Route(pathname, block, { rootQuery: this._rootQuery });

        this.routes.push(route);

        return this;
    }

    public start() {
        window.onpopstate = ((event: any) => {
            this._onRoute(event.currentTarget.location.pathname);
        }).bind(this);

        this._onRoute(window.location.pathname);
    }

    private _onRoute(pathname: string) {
        const route = this.getRoute(pathname);
        if (!route) {
            return;
        }

        if (this._currentRoute && this._currentRoute !== route) {
            this._currentRoute.leave();
        }

        this._currentRoute = route;
        // route.render(route, pathname);
        route.render();

    }

    public go(pathname: string) {
        this.history.pushState({}, '', pathname);
        this._onRoute(pathname);
    }

    public back() {
        this.history.back();
    }

    public forward() {
        this.history.forward();
    }

    public getRoute(pathname: string) {
        return this.routes.find(route => route.match(pathname));
    }
}

// Необходимо оставить в силу особенностей тренажёра
history.pushState({}, '', '/');

const router = new Router(".app");

// Можно обновиться на /user и получить сразу пользователя
router
    // .use("/", signIn)
    // .use("/users", profile)
    .start();

// Через секунду контент изменится сам, достаточно дёрнуть переход
setTimeout(() => {
    router.go("/users");
}, 1000);

// А можно и назад
setTimeout(() => {
    router.back();
}, 3000);

// И снова вперёд
setTimeout(() => {
    router.forward();
}, 5000);