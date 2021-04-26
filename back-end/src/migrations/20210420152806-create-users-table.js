module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('users', {
      id: { 
        type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false,
      },
      name: {
        type: Sequelize.STRING, allowNull: false,
      },
      email: {
        type: Sequelize.STRING, allowNull: false, unique: true,
      },
      password: {
        type: Sequelize.STRING, allowNull: false,
      },
      role: {
        type: Sequelize.STRING, allowNull: false,
      },
    }),

  down: async (queryInterface, Sequelize) => queryInterface.dropTable('users'),
};
