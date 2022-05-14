"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const fs = require("fs");
const tokenConfig = { expiresIn: '7d' };
const SECRET = fs.readFileSync('jwt.evaluation.key', 'utf-8');
const getToken = (email, role) => {
    const response = jwt.sign({ email, role }, SECRET, tokenConfig);
    return response;
};
const validation = (token) => {
    const response = jwt.verify(token, SECRET);
    return response;
};
exports.default = { getToken, validation };
//# sourceMappingURL=token.js.map