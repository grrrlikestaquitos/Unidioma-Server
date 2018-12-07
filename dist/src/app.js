"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const http_1 = require("http");
const routes_1 = require("routes");
const bodyParser = require("body-parser");
class Application {
    constructor() {
        this.app = express();
        this.server = http_1.createServer(this.app);
        this.configureApplication();
    }
    configureApplication() {
        this.app.use(bodyParser.json({ limit: '2mb' }));
        this.linkSubRoutes();
        this.configureApplicationRoutes();
    }
    configureApplicationRoutes() {
        this.app.get('/', (request, response) => {
            response.status(200).json({ Home: 'Marauders Server' });
        });
    }
    linkSubRoutes() {
        this.app.use('/api', routes_1.default.routes);
    }
    listen() {
        this.server.listen(7555, () => {
            console.log('Server running on port 7555');
        });
    }
}
exports.default = new Application();
