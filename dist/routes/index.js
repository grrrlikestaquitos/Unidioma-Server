"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const map_1 = require("routes/map");
class AllRoutes {
    constructor() {
        this.routes = express_1.Router();
        this.mapRoutes = map_1.default;
        this.linkSubRoutes();
    }
    linkSubRoutes() {
        console.log('Linking sub routes');
        this.routes.use(this.mapRoutes.routes);
    }
}
exports.default = new AllRoutes();
