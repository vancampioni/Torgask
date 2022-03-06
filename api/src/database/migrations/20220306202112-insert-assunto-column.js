'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.addColumn('assunto', 'tasks', {
      type: Sequelize.STRING(20),
      allowNull: true
      });
     
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.removeColumn('assunto', 'tasks');
     
  }
};
