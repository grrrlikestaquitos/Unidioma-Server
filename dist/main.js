"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_module_path_1 = require("app-module-path");
app_module_path_1.addPath(__dirname);
const express = require("express");
const http_1 = require("http");
const routes_1 = require("routes");
const app = express();
const server = http_1.createServer(app);
app.use('/api', routes_1.default.routes);
app.get('/', (request, response) => {
    response.status(200).json({ Home: 'Marauders Server' });
});
server.listen(7555, () => {
    console.log('Server running on port 7555');
});
