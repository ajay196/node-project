'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('user_data',{ 
      id: {
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true
      },
      email:{
        type: Sequelize.STRING,
        allowNull: false
      },
      password:{
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at:{
        type:Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      last_login_at:{
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('user_data')
  }
};
