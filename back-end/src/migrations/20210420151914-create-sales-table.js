module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('sales', {
      id: {
        type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false,
      },
      totalPrice: {
        type: Sequelize.DECIMAL(9, 2), allowNull: false,
      },
      deliveryAddress: {
        type: Sequelize.STRING, allowNull: false,
      },
      deliveryNumber: {
        type: Sequelize.STRING, allowNull: false,
      },
      saleDate: {
        type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.fn('now'),
      },
      status: {
        type: Sequelize.STRING, allowNull: false, defaultValue: 'Pendente',
      },
    }),

  down: async (queryInterface, Sequelize) => queryInterface.dropTable('sales'),
};
