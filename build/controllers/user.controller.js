"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = require("../services/user.service");
const token_1 = require("../helpers/token");
class LoginController {
}
_a = LoginController;
LoginController.userLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const getUser = await user_service_1.default.loginUser(email, password);
        const { code, data } = getUser;
        return res.status(code).json(data);
    }
    catch (err) {
        next(err);
    }
};
LoginController.validation = async (req, res, next) => {
    try {
        const auth = req.headers.authorization;
        if (!auth)
            return res.status(401).json({ message: 'Token not found' });
        const response = token_1.default.validation(auth);
        return res.status(200).json(response.role);
    }
    catch (err) {
        next(err);
    }
};
exports.default = LoginController;
//# sourceMappingURL=user.controller.js.map