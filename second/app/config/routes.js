'use strict';

const path = require('path'),
    fs = require('fs'),
    expressJWT = require('express-jwt'),
    env = require(path.resolve(`./app/config/env/${process.env.NODE_ENV}`)),
    api_path = env.API.site;

class AppRouter {
    constructor(app, router) {
        this.call = {
            frontend: {}
        };
        this.frontend = {};

        /**/
        this.api_path = api_path;

        /**/
        this.app = app;
        this.router = router;
    }

    loadAppClasses() {
        fs.readdirSync(path.resolve('./app/controllers')).forEach(file => {
            let name = file.substr(0, file.indexOf('.'));
            /*Store Classes in frontend object*/
            this.frontend[name] = require(path.resolve(`./app/controllers/${name}`));
            /*Init All Classes & add Object to Array*/
            this.call['frontend'][name] = new this.frontend[name]();
        });
    }

    unlessRoutes() {
        this.router.use(expressJWT({
            secret: new Buffer(env.secret).toString('base64'),
        }).unless({
            path: [
                this.api_path + 'users'
            ]
        }));
    }

    loadAppRoutes() {
        this.router.get('/users', this.call['frontend']['UserController'].get);
    }

    init() {
        this.loadAppClasses();
        // this.unlessRoutes();
        this.loadAppRoutes();

        return this.router;
    }
}

module.exports = AppRouter;