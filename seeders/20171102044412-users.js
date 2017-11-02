'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users',
      [
      { name: 'Ella' },
      { name: 'Melover'},
      { name: 'Melton' },
      { name: 'Kaley' },
      { name: 'Baseem' },
      { name: 'Kevin' },
      { name: 'Virgi' },
      { name: 'Ricky' }
      ]);
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
``