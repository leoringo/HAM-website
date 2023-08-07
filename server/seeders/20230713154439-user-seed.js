'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
    */
    let data = require('../data/user.json').map(e => {
      e.createdAt = e.updatedAt = new Date()
      e.password = require('bcryptjs').hashSync(e.password, 5)
      return e
    })
    await queryInterface.bulkInsert('Users', data, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
    */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
