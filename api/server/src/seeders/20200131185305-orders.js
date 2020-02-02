'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:*/

      return queryInterface.bulkInsert('orders', [
        {
          clientName: 'Maria Eduarda',
          table: 5,
          status: 'pending'
        }
        {
          clientName: 'Igor',
          table: 6,
          status: 'pending'
        }
        {
          clientName: 'Ana Cláudia',
          table: 5,
          status: 'pending'
        }
      ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
