
exports.up = function(knex) {
    return knex.schema
        .createTable('paired_base', tbl => {
            tbl.increments('id')
            tbl.integer('base_coin_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('base_coin')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            tbl.integer('paired_coin_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('paired_coin')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');      
            tbl.float('va_high');
            tbl.float('va_low');
        })
  };
  
exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('paired_base')
};
  