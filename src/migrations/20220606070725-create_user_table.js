'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.sequelize.query(`CREATE TABLE Users(
      id int(10) unsigned NOT NULL AUTO_INCREMENT,
      first_name varchar(255) NOT NULL,
      last_name varchar(4) DEFAULT NULL,
      type int(10) unsigned NOT NULL,  
      otp int(10) unsigned NULL,
      PRIMARY KEY (id)
      )`)
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
