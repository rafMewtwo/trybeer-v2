const SaleModel = (sequelize, DataTypes) => {
  const Sale = sequelize.define('sale', {
    totalPrice: DataTypes.DECIMAL,
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: { type: DataTypes.DATE, defaultValue: new Date() },
    status: DataTypes.STRING,
  },
  {
    timestamps: false,
  });

  Sale.associate = (models) => {
    Sale.belongsTo(models.user, { as: 'user', foreignKey: 'userId' });
  };

  return Sale;
};

module.exports = SaleModel;
