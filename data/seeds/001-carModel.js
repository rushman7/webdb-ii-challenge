
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { 
          car: 'Audi R8', 
          VIN: 'WUAKNAFG1EN000557', 
          make: 'AUDI',
          model: 'R8',
          mileage: 150000,
          status: 'clean',
          type: 'new'
        },
        { 
          car: 'Tesla Model X', 
          VIN: 'ADJKS182CAESLCE4', 
          make: 'Tesla Motors, Inc.',
          model: 'X',
          mileage: 250000,
          status: 'clean',
          type: 'new'
        },
      ]);
    });
};
