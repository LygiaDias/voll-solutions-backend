"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcryptjs");
const user_model_1 = require("../database/models/user.model");
const token_1 = require("../helpers/token");
class LoginService {
}
_a = LoginService;
LoginService.loginUser = async (email, password) => {
    const getUser = await user_model_1.default.findOne({ where: { email } });
    if (email === "" || password === "") {
        return { code: 400, data: { message: "All fields must be filled" } };
    }
    if (!getUser || !bcrypt.compareSync(password, getUser.password)) {
        return { code: 401, data: { message: "Incorrect email or password" } };
    }
    const getToken = token_1.default.getToken(email, getUser.role);
    const body = {
        user: {
            id: getUser.id,
            username: getUser.username,
            role: getUser.role,
            email: getUser.email,
        },
        token: getToken,
    };
    return { code: 200, data: body };
};
exports.default = LoginService;
//# sourceMappingURL=user.service.js.map