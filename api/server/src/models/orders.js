'use strict';
module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define('orders', {
    client_name: DataTypes.STRING,
    client_table: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {});
  orders.associate = function(models) {
    // associations can be defined here
  };
  return orders;
};