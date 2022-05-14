import * as bcrypt from "bcryptjs";
import UserModel from "../database/models/user.model";
import token from "../helpers/token";

class LoginService {
  static loginUser = async (email: string, password: string) => {
    const getUser = await UserModel.findOne({ where: { email } });

    if (email === "" || password === "") {
      return { code: 400, data: { message: "All fields must be filled" } };
    }
    if (!getUser || !bcrypt.compareSync(password, getUser.password)) {
      return { code: 401, data: { message: "Incorrect email or password" } };
    }
    const getToken = token.getToken(email, getUser.role);
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
}

export default LoginService;
