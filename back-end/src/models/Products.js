const ProductModel = (sequelize, DataTypes) => {
  const Product = sequelize.define('product', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    urlImage: DataTypes.STRING,
  },
  {
    timestamps: false,
  });

  return Product;
};

module.exports = ProductModel;
