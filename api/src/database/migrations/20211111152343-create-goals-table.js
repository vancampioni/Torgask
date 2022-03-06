'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('goals', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true 
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      nome: {
        type:Sequelize.STRING,
        allowNull:false
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull:false
      },
      estado: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      data_inicio: {
        type: Sequelize.DATE,
        allowNull: false
      },
      data_fim: {
        type: Sequelize.DATE,
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
    
     await queryInterface.dropTable('goals');
     
  }
};
