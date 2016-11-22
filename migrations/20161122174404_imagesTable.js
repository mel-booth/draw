
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('imagesTable', function(table){
    table.increments('id')
    table.string('url')
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('imagesTable')
  .then(function(){
    console.log('imagesTable was dropped');
  })


};
