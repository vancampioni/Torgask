'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('tasks', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true 
      },
      goal_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'goals', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      nome: {
        type:Sequelize.STRING,
        allowNull:false
      },
      anotacao: {
        type: Sequelize.STRING,
        allowNull:false
      },
      estado: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      data_agendada: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
       type: Sequelize.DATE,
       allowNull: false
      }

      });
     
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.dropTable('tasks');
     
  }
};
