"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
class Products extends sequelize_1.Model {
}
Products.init({
    id: {
        type: sequelize_1.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    productName: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    price: {
        type: sequelize_1.DECIMAL,
        allowNull: false,
    },
    coins: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
}, {
    underscored: true,
    sequelize: _1.default,
    timestamps: false,
});
exports.default = Products;
//# sourceMappingURL=products.model.js.map