'use strict';
module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define('orders', {
    Clientname: DataTypes.STRING,
    order:
    table: DataTypes.INTEGER,
    status: DataTypes.STRING,
   
  }, {});
  orders.associate = function(models) {
    // onde irá aparecer outras vezes (tabela relacional)
  };
  
  return orders;
};

