const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection'); // Assuming your database connection configuration is in ../config/connection.js

class Product extends Model {}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10, // Set a default value of 10
      validate: {
        isNumeric: true,
      },
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category', // This should match the model name in the association
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;