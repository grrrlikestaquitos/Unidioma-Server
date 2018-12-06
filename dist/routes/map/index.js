"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class MapRoutes {
    constructor() {
        this.routes = express_1.Router();
        this.configureMapRoutes();
    }
    configureMapRoutes() {
        this.routes.get('/map', (request, response) => {
            response.status(200).json({ data: 'Successful map route implementation' });
        });
    }
}
exports.default = new MapRoutes();
