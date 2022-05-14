module.exports = {
  up: async (queryInterface) => {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert('products', [
      {
        product_name: 'This is War',
        description: 'Album da banda 30 Seconds to Mars',
        price: '10.99',
        coins: '10' 
      },
      {
        product_name: 'Froot',
        description: 'Album da cantora Marina and The Diamonds',
        price: '15.99',
        coins: '15' 
      },
    ], {});
  },

  down: async (queryInterface) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete('users', null, {});
  },
};
