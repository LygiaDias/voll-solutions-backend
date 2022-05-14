"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const products_model_1 = require("../database/models/products.model");
class ProductsService {
}
_a = ProductsService;
ProductsService.getProducts = async () => {
    const products = await products_model_1.default.findAll();
    return { code: 200, data: products };
};
ProductsService.getProductId = async (id) => {
    const productId = await products_model_1.default.findByPk(id);
    return { code: 200, data: productId };
};
ProductsService.createProducts = async (products) => {
    const productObj = await products_model_1.default.create({
        productName: products.productName,
        description: products.description,
        price: products.price,
        coins: products.coins,
    });
    return { code: 201, data: productObj };
};
ProductsService.updateProducts = async (id, products) => {
    await products_model_1.default.update({
        productName: products.productName,
        description: products.description,
        price: products.price,
        coins: products.coins,
    }, { where: { id } });
    return { code: 200, data: { message: "Updated!" } };
};
ProductsService.deleteProducts = async (id) => {
    await products_model_1.default.destroy({ where: { id } });
    return { code: 200, data: { message: "Deleted!" } };
};
exports.default = ProductsService;
//# sourceMappingURL=products.service.js.map