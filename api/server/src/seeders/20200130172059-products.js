'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('products', [
        {
          name: 'Café Americano',
          price: 5,
          breakfast: true,
          itemtype: "drink",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Café com Leite',
          price: 7,
          breakfast: true,
          itemtype: "drink",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Misto Quente',
          price: 10,
          breakfast: true,
          itemtype: "sandwich",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Suco de Fruta Natural',
          price: 7,
          breakfast: true,
          itemtype: "drink",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Batata Frita',
          price: 5,
          breakfast: false,
          itemtype: "extra",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Anéis de Cebola',
          price: 5,
          breakfast: false,
          itemtype: "extra",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Água 500ml',
          price: 5,
          breakfast: false,
          itemtype: "drink",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Água 750ml',
          price: 7,
          breakfast: false,
          itemtype: "drink",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Refrigerante 500ml',
          price: 7,
          breakfast: false,
          itemtype: "drink",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Refrigerante 750ml',
          price: 10,
          breakfast: false,
          itemtype: "drink",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Ovo',
          price: 1,
          breakfast: false,
          itemtype: "additional",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Queijo',
          price: 1,
          breakfast: false,
          itemtype: "additional",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Hambúrguer Simples Carne',
          price: 10,
          breakfast: false,
          itemtype: "sandwich",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Hambúrguer Simples Frango',
          price: 10,
          breakfast: false,
          itemtype: "sandwich",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Hambúrguer Simples Vegetariano',
          price: 10,
          breakfast: false,
          itemtype: "sandwich",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Hambúrguer Duplo Carne',
          price: 15,
          breakfast: false,
          itemtype: "sandwich",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Hambúrguer Duplo Frango',
          price: 15,
          breakfast: false,
          itemtype: "sandwich",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Hambúrguer Duplo Vegetariano',
          price: 15,
          breakfast: false,
          itemtype: "sandwich",
          createdAt: new Date(),
          updatedAt: new Date()
        },


    ], {});
    
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('products', null, {});
    
  }
};
