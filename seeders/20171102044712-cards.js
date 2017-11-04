'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('cards',
      [
      { title: 'Laundry Clothes',
        created_by_id: 4,
        assigned_to_id: 1,
        status_id: 1,
        priority_id: 3 },
      { title: 'Empty Trash',
        created_by_id: 5,
        assigned_to_id: 2,
        status_id: 1,
        priority_id: 3 },
      { title: 'Clean Bathroom',
        created_by_id: 2,
        assigned_to_id: 8,
        status_id: 1,
        priority_id: 2 },
      { title: 'Study Life',
        created_by_id: 5,
        assigned_to_id: 1,
        status_id: 1,
        priority_id: 1 },
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
