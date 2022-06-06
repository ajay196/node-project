'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('Users','created_at',
    {type: Sequelize.DATE, defaultValue: Sequelize.fn('now')})
    await queryInterface.addColumn('Users','updated_at',
    {type: Sequelize.DATE, defaultValue: Sequelize.fn('now')})
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
