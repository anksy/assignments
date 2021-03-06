'use strict';

require('dotenv').config({ silent: true });
const express = require('express'),
    helmet = require('helmet'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    http = require('http'),
    router = express.Router(),
    routes = require('./app/config/routes'),
    env = require(path.resolve(`./app/config/env/${process.env.NODE_ENV}`));

class Server {
    constructor() {

        /*defining PORT for application*/
        this.port = env.server.PORT || 4000;

        /*init express app*/
        this.app = express();

        /*init a sever*/
        this.server = http.createServer(this.app);

        /*init helmets for securing http headers*/
        this.helmet = helmet();

        /*init cors for multiple origin requests*/
        this.cors = cors();

        this.router = router;

        this.routes;
    }

    secureHeaders() {
        /*protect http headers of server through Helmet*/
        this.app.use(this.helmet);
    }

    appConfig() {
        /*allow application to read and send data in body*/
        this.app.use(bodyParser.json({ limit: '50mb' }));
        this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
    }

    enablingCors() {
        /*enable application CORS*/
        this.app.use(this.cors);
    }


    initRoutes() {
        this.routes = new routes(this.app, this.router).init();
    }

    setAPIRoutes() {
        /*routing /&admin apis*/
        this.app.use('/api', this.routes);
    }

    allowToServe() {
        /** serve static path */
        this.app.use(express.static(__dirname + '/build'));	
        /*rendering file on routes*/
        this.app.get(/^((?!\/(api)).)*$/, (req, res) => {
            res.sendFile(path.resolve('./build/index.html'));
        });
    }

    init() {
        /*Listen on Server Port*/
        this.secureHeaders();
        this.appConfig();
        this.enablingCors();
        this.initRoutes();
        this.setAPIRoutes();
        this.allowToServe();

        this.server.listen(this.port, () => {
            console.log('listening on', this.server.address().port);
        });
    }
}

new Server().init();