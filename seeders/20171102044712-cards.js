'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('cards',
      [
      { title: 'Laundry Clothes',
        created_by: 1,
        assigned_to: 1,
        status_id: 1,
        priority_id: 3 },
      { title: 'Empty Trash',
        created_by: 2,
        assigned_to: 2,
        status_id: 1,
        priority_id: 3 },
      { title: 'Clean Bathroom',
        created_by: 3,
        assigned_to: 3,
        status_id: 1,
        priority_id: 2 },
      { title: 'Study Life',
        created_by: 1,
        assigned_to: 4,
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
