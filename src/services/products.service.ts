import productsModel from '../database/models/products.model';
import IProduct from '../interfaces/product.interface'

class ProductsService {
  static getProducts = async () => {
    const products = await productsModel.findAll();
    return { code: 200, data: products };
  };

  static getProductId = async (id: string) => {
    const productId = await productsModel.findByPk(id);
    return { code: 200, data: productId };
  };

  static createProducts = async (products: IProduct) => {
    const productObj = await productsModel.create({
      productName: products.productName,
      description: products.description,
      price: products.price,
      coins: products.coins,
    });
    return { code: 201, data: productObj };
  };

  static updateProducts = async (id: string, products: IProduct) => {
    await productsModel.update(
      {
        productName: products.productName,
        description: products.description,
        price: products.price,
        coins: products.coins,
      },
      { where: { id } }
    );
    return { code: 200, data: { message: "Updated!" } };
  };

  static deleteProducts = async (id: string) => {
    await productsModel.destroy({ where: { id } });

    return { code: 200, data: { message: "Deleted!" } };
  };
}

export default ProductsService;
