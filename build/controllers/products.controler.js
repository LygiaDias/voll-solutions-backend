"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const products_service_1 = require("../services/products.service");
class ProductsController {
}
_a = ProductsController;
ProductsController.getAll = async (_req, res) => {
    const response = await products_service_1.default.getProducts();
    const { code, data } = response;
    return res.status(code).json(data);
};
ProductsController.getById = async (req, res) => {
    const { id } = req.params;
    const response = await products_service_1.default.getProductId(id);
    const { code, data } = response;
    return res.status(code).json(data);
};
ProductsController.create = async (req, res) => {
    const { body } = req;
    const response = await products_service_1.default.createProducts(body);
    const { code, data } = response;
    return res.status(code).json(data);
};
ProductsController.update = async (req, res) => {
    const { productName, description, price, coins } = req.body;
    const { id } = req.params;
    const response = await products_service_1.default.updateProducts(id, { productName, description, price, coins });
    const { data, code } = response;
    return res.status(code).json(data);
};
ProductsController.delete = async (req, res) => {
    const { id } = req.params;
    const response = await products_service_1.default.deleteProducts(id);
    const { code, data } = response;
    return res.status(code).json(data);
};
exports.default = ProductsController;
//# sourceMappingURL=products.controler.js.map