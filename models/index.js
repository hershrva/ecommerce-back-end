// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Associations

// Products belong to a Category
Product.belongsTo(Category, {
  foreignKey: 'category_id', // This should match the column name in the Product model
  onDelete: 'CASCADE', // If a category is deleted, also delete the products in that category
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id', // This should match the column name in the Product model
});

// Products belong to many Tags through ProductTag
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id', // This should match the column name in the ProductTag model
});

// Tags belong to many Products through ProductTag
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id', // This should match the column name in the ProductTag model
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};