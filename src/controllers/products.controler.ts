import { Request, Response, NextFunction } from "express";
import { nextTick } from "process";
import productsService from "../services/products.service";

class ProductsController {
  static getAll = async (_req: Request, res: Response) => {
    const response = await productsService.getProducts();
    const { code, data } = response;
    return res.status(code).json(data);
  };

  static getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const response = await productsService.getProductId(id);
      const { code, data } = response;
      return res.status(code).json(data);
    } catch (err) {
      next(err);
    }
  };
  static create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { body } = req;
      const response = await productsService.createProducts(body);
      const { code, data } = response;
      return res.status(code).json(data);
    } catch (err) {
      next(err);
    }
  };

  static update = async (req: Request, res: Response, next: NextFunction) => {
    
    try{
    const { productName, description, price, coins } = req.body;
    const { id } = req.params;
    const response = await productsService.updateProducts(id, {
      productName,
      description,
      price,
      coins,
    });
    const { data, code } = response;
    return res.status(code).json(data);
  } catch (err) {
    next(err)
  }
}
  static delete = async (req: Request, res: Response, next: NextFunction) => {
    try{
    const { id } = req.params;
    const response = await productsService.deleteProducts(id);
    const { code, data } = response;
    return res.status(code).json(data);
  }catch (err) {
    next(err)
  }
  }
}
export default ProductsController;
