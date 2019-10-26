
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments();
    tbl.text('car', 128).notNullable();
    tbl.text('VIN', 128).unique().notNullable();
    tbl.text('make', 128).notNullable();
    tbl.text('model', 128).notNullable();
    tbl.integer('mileage').notNullable();
    tbl.text('status', 128);
    tbl.text('type', 128);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
