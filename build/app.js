"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = exports.App = void 0;
const express = require("express");
const user_route_1 = require("./routes/user.route");
const products_router_1 = require("./routes/products.router");
class App {
    // ...
    constructor() {
        this.app = express();
        this.config();
        // ...
    }
    config() {
        const accessControl = (_req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
            res.header('Access-Control-Allow-Headers', '*');
            next();
        };
        this.app.use(accessControl);
        this.app.use(express.json());
        this.app.use('/login', user_route_1.default);
        this.app.use('/products', products_router_1.default);
        this.app.get('/', (req, res) => {
            res.status(200).json({
                status: 'success',
                data: {
                    name: 'Voll-Store-Backend',
                    version: '0.1.0'
                }
            });
        });
        // ...
    }
    // ...
    start(PORT) {
        this.app.listen(PORT, () => console.log('rodando na porta:', PORT));
    }
}
exports.App = App;
// A execução dos testes de cobertura depende dessa exportação
exports.app = new App().app;
//# sourceMappingURL=app.js.map