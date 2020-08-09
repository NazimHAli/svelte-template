class Router {
    routes = [];
    mode: string = "hash";
    root: string = "/";
    current: string;
    interval: number;

    constructor(options: { mode: string; root: string }) {
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

    cleanPath = (path: RegExp | string) => {
        return path.toString().replace(/\/$/, "").replace(/^\//, "");
    };

    getCurrentRoute = () => {
        let fragment = "";

        if (this.mode === "history") {
            fragment = this.cleanPath(
                decodeURI(window.location.pathname + window.location.search)
            );
            fragment = fragment.replace(/\?(.*)$/, "");
            fragment =
                this.root !== "/" ? fragment.replace(this.root, "") : fragment;
        } else {
            const match = window.location.href.match(/#(.*)$/);
            fragment = match ? match[1] : "";
        }
        return this.cleanPath(fragment);
    };

    initializeNavigationListener = () => {
        clearInterval(this.interval);
        this.interval = setInterval(this.getCustomInterval, 50);
    };

    getCustomInterval = () => {
        if (this.current === this.getCurrentRoute()) return;
        this.current = this.getCurrentRoute();

        this.routes.some((route) => {
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
