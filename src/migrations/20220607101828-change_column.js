'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.changeColumn('user_data', 'created_at',{ 
      type:Sequelize.DATE,
        defaultValue: Sequelize.NOW,
    })
    await queryInterface.changeColumn('user_data', 'last_login_at',{ 
      type:Sequelize.DATE,
        defaultValue: Sequelize.NOW,
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
