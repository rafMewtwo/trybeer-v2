const saleProductModel = (sequelize, DataTypes) => {
  const saleProduct = sequelize.define('salesProduct', {
    quantity: DataTypes.STRING,
  },
  {
    timestamps: false,
  });

  saleProduct.associate = (models) => {
    models.sale.belongsToMany(models.product, 
      { through: saleProduct, as: 'products', foreignKey: 'saleId', otherKey: 'productId' });

    models.product.belongsToMany(models.sale, 
      { through: saleProduct, as: 'sales', foreignKey: 'productId', otherKey: 'saleId' });

    saleProduct.belongsTo(models.sale,
      { foreignKey: 'saleId', as: 'sale' });
    
    saleProduct.belongsTo(models.product, {
      foreignKey: 'productId', as: 'product',
    });
  };

  return saleProduct;
};

module.exports = saleProductModel;