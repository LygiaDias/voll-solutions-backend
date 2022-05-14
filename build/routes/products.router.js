"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_controler_1 = require("../controllers/products.controler");
const router = (0, express_1.Router)();
router.get('/', products_controler_1.default.getAll);
router.get('/:id', products_controler_1.default.getById);
router.post('/', products_controler_1.default.create);
router.put('/:id', products_controler_1.default.update);
router.delete('/:id', products_controler_1.default.delete);
exports.default = router;
//# sourceMappingURL=products.router.js.map