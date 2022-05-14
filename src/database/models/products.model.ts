import { Model, STRING, INTEGER, DECIMAL } from 'sequelize';
import db from '.';

class Products extends Model {
  public id!: number;

  public productName!: string;

  public description!: string;

  public price!: string;

  public coins!: string;
}

Products.init(
  {
    id: {
      type: INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    productName: {
      type: STRING,
      allowNull: false,
    },
    description: {
      type: STRING,
      allowNull: false,
    },

    price: {
      type: DECIMAL,
      allowNull: false,
    },

    coins: {
      type: STRING,
      allowNull: false,
    },
  },
  {

    underscored: true,
    sequelize: db,

    timestamps: false,
  },
);

export default Products;
