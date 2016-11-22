const Knex = require('knex')
const knexConfig = require('../knexfile')[process.env.NODE_ENV || 'development']
const knex = Knex(knexConfig)

module.exports = {
  getImages,
  getImageById,
  postImage
}

function getImages() {
  return knex('imagesTable')
}

function getImageById(id){
  return knex('imagesTable')
  .where('id', id)
}

function postImage(url) {
  return knex('imagesTable')
  .insert({url: url})
}
