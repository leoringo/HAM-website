'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
    */
    let data = require('../data/images.json').map(e => {
      e.createdAt = e.updatedAt = new Date()
      return e
    })
    await queryInterface.bulkInsert('Images', data, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
    */
    await queryInterface.bulkDelete('Images', null, {});
  }
};
