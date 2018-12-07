"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const map_1 = require("routes/map");
class AllRoutes {
    constructor() {
        this.mapRoutes = map_1.default;
        this.routes = express_1.Router();
        this.linkSubRoutes();
    }
    linkSubRoutes() {
        this.routes.use(this.mapRoutes.routes);
    }
}
exports.default = new AllRoutes();
