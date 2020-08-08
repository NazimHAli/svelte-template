class Router {
    routes = [];
    mode: string = "hash";
    root: string = "/";
    current: string;
    interval: number;

    constructor (options: { mode: string; root: string; }) {
        this.mode = window.history.pushState ? "history" : "hash";

        if (options.mode) {
            this.mode = options.mode;
        }

        if (options.root) {
            this.root = options.root;
        }

        this.initializeNavigationListener();
    }

    addRoute = (path: RegExp | string, callback) => {
        this.routes.push({ path, callback });
        return this;
    };

    removeRoute = (path: RegExp | string) => {
        for (let i = 0; i < this.routes.length; i += 1) {
            if (this.routes[i].path === path) {
                this.routes.slice(i, 1);
                return this;
            }
        }
        return this;
    };

    clearRoutes = () => {
        this.routes = [];
        return this;
    };

    clearSlashes = (path: RegExp | string) => {
        return path
            .toString()
            .replace(/\/$/, "")
            .replace(/^\//, "");
    };

    getFragment = () => {
        let fragment = "";

        if (this.mode === "history") {
            fragment = this.clearSlashes(decodeURI(window.location.pathname + window.location.search));
            fragment = fragment.replace(/\?(.*)$/, "");
            fragment = this.root !== "/" ? fragment.replace(this.root, "") : fragment;
        } else {
            const match = window.location.href.match(/#(.*)$/);
            fragment = match ? match[1] : "";
        }
        return this.clearSlashes(fragment);
    };

    navigate = (path: string = "") => {
        if (this.mode === "history") {
            window.history.pushState(null, null, this.root + this.clearSlashes(path));
        } else {
            window.location.href = `${window.location.href.replace(/#(.*)$/, "")}#${path}`;
        }
        return this;
    };

    initializeNavigationListener = () => {
        clearInterval(this.interval);
        this.interval = setInterval(this.getCustomInterval, 50);
    };

    getCustomInterval = () => {
        if (this.current === this.getFragment()) return;
        this.current = this.getFragment();

        this.routes.some(route => {
            const match = this.current.match(route.path);
            if (match) {
                match.shift();
                route.callback.apply({}, match);
                return match;
            }
            return false;
        });
    };
}

export default Router;
