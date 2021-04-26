module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('salesProducts', {
      saleId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: { model: 'sales', key: 'id' },
        onDelete: 'CASCADE',
        allowNull: false,
      },
      productId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: { model: 'products', key: 'id' },
        onDelete: 'CASCADE',
        allowNull: false,
      },
      quantity: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    }),
  
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('salesProducts');
  },
};
