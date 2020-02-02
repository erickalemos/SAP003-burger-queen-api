'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('orders', [
        {
          client_name: 'Maria Eduarda',
          client_table: 5,
          status: 'pending',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          client_name: 'Igor',
          client_table: 6,
          status: 'pending',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          client_name: 'Ana Cláudia',
          client_table: 4,
          status: 'pending',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
    
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('orders', null, {});
    
  }
};
