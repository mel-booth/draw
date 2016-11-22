var express = require('express');
var router = express.Router();
var database = require('../db/images')

router.get('/', function(req, res, next){
  console.log(req, res, "hey")
  database.getImages()
  .then(function(imagesTable){
    res.json({index: imagesTable})
  })
  .catch(function(err){
    console.log(err)
    res.json({err: [{message: 'Problem connecting to the database.'}]})
  })

});


router.get('/:id', function(req, res, next) {


});

router.post('/', function(req, res, next) {


});

module.exports = router;
