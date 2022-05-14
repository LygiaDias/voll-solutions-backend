import { Request, Response, NextFunction } from 'express';

import userService from '../services/user.service';
import token from '../helpers/token';

class LoginController {
  
 static userLogin = async (req: Request, res: Response, next: NextFunction) => {
    try{
      const { email, password } = req.body;
      const getUser = await userService.loginUser(email, password);
      const { code, data } = getUser;
      return res.status(code).json(data);
    } catch(err){
      next(err)
    }
}

  static validation = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const auth = req.headers.authorization;

      if (!auth) return res.status(401).json({ message: 'Token not found' });
      const response = token.validation(auth);
      return res.status(200).json(response.role);
    } catch (err) {
      next(err);
    }
  };
}

export default LoginController;