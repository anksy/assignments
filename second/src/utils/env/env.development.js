(function () {
    /*creating an env for application*/
    /** this will be avialbale globally for app */
    window._env = window._env || {};
    /** Register basic details of an app */
    window._env.app = {
        name : "CRUDapp",
        prefix : "_dev_"
    }

    /** Setting up ports on which API will called and socket will run */
    window._env.ports = {
        API: 4000
    };

    /** setting up socket and api urls */
    window._env.uri = {
        base: "http://localhost:" + window._env.ports.API + "/"
    };

    /** setting up default params for API Points  */
    window._env.api = {
        path: window._env.uri.base + "api/",
        limit: 10
    };
}());
