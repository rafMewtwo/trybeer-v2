module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.addColumn('sales', 'userId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 1,
      references: {
        model: 'users',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    }),

  down: async (queryInterface, Sequelize) => queryInterface.removeColumn('sales', 'userId'),
};
