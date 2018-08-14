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

    loadAppRoutes() {
        this.router.get('/users', this.call['frontend']['UserController'].list);
        this.router.delete('/users/delete/:id', this.call['frontend']['UserController'].delete);
        this.router.post('/users/add', this.call['frontend']['UserController'].add);
        this.router.get('/users/get/:id', this.call['frontend']['UserController'].get);
        this.router.put('/users/edit/:id', this.call['frontend']['UserController'].edit);
    }

    init() {
        this.loadAppClasses();
        this.loadAppRoutes();

        return this.router;
    }
}

module.exports = AppRouter;