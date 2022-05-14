'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
  await queryInterface.createTable('products', {
    id: {
      type: Sequelize.INTEGER, 
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
},  
    product_name:{
      type: Sequelize.STRING,
      allowNull: false
}, 
    description: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
},

    price: {
      type: Sequelize.DECIMAL,
      allowNull: false
},
       coins: {
      type: Sequelize.INTEGER,
      allowNull: false
},
})
  
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Products')
  }
};