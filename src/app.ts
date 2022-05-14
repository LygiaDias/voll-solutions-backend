import { Request, Response } from 'express';
import * as express from 'express';
import loginRouter from './routes/user.route';
import productRouter from './routes/products.router';

class App {
  public app: express.Express;
  // ...

  constructor() {
    this.app = express();
    this.config();
    // ...
  }
  
  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(accessControl);
    this.app.use(express.json());
    this.app.use('/login', loginRouter);
    this.app.use('/products', productRouter);
    
    
    this.app.get('/', (req:Request, res: Response ) => {

      res.status(200).json({
          status: 'success',
          data: {
              name: 'Voll-Store-Backend',
              version: '0.1.0'
          }
      });
  
  });
    // ...
  }

  // ...
  public start(PORT: string | number):void {
    this.app.listen(PORT, () =>
      console.log('rodando na porta:', PORT));
  }
}

export { App };

// A execução dos testes de cobertura depende dessa exportação
export const { app } = new App();
