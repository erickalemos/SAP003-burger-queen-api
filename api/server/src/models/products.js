'use strict';
module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define('products', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    breakfast: DataTypes.BOOLEAN,
    itemtype: DataTypes.STRING
  }, {});
  products.associate = function(models) {
    // associations can be defined here
  };
  // sequelize.sync().then(()=>products.create({
  //   name: "Chá",
  //   price: 5,
  //   breakfast: true,
  //   itemtype: "drink" 
  // }))
  return products;
};

