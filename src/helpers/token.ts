import * as jwt from 'jsonwebtoken';
import * as fs from 'fs';
import UserModel from '../database/models/user.model';

const tokenConfig = { expiresIn: '7d' };

const SECRET = fs.readFileSync('jwt.evaluation.key', 'utf-8');

const getToken = (email:string, role:string) => {
  const response = jwt.sign({ email, role }, SECRET, tokenConfig);
  return response;
};
const validation = (token: string) => {
  const response = jwt.verify(token, SECRET) as jwt.JwtPayload as UserModel;

  return response;
};
export default { getToken, validation };