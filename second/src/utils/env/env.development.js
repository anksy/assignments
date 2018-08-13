(function () {
    /*creating an env for application*/
    /** this will be avialbale globally for app */
    window._env = window._env || {};
    /** Register basic details of an app */
    window._env.app = {
        name : "Athlete",
        prefix : "_dev_"
    }

    /** Setting up ports on which API will called and socket will run */
    window._env.ports = {
        API: window.location.port ? ("8000" || window.location.port) : "8035",
        SOCKET : "8024"
    };

    /** setting up socket and api urls */
    window._env.uri = {
        base: "http://100.100.6.241:" + window._env.ports.API + "/",
        socket: "http://100.100.6.241:" + window._env.ports.SOCKET
    };

    /** setting up default params for API Points  */
    window._env.api = {
        path: window._env.uri.base + "api/",
        limit: 10
    };
}());

/**CATCHPA site key
 * EMAIL :- flexsin.nodejs@gmail.com
 * pswd:-flexsin@123
 */
export const sitekey = "6LeN_kwUAAAAAPFyDlfPZqZqf4tkb6L8eDPA7MvE";
