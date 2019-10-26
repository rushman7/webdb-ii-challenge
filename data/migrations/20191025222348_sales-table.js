
exports.up = function(knex) {
  return knex.schema.createTable('sales', tbl => {
    tbl.increments();
    tbl.text('car', 128).notNullable();
    tbl.text('date_sold', 128).notNullable();
    tbl.integer('price').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('sales');
};
