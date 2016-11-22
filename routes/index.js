var express = require('express');
var router = express.Router();
var db = require('../db/images')

router.get('/', function(req, res, next){
  db.getImages()
  .then(function(images){
    res.json({images: images})
  })
  .catch(function(err){
    console.log(err)
    res.json({err: [{message: 'Problem connecting to the database.'}]})
  })

});

router.get('/:id', function(req, res, next) {
  db.getImageById(req.params.id)
  .then(function(image){
    res.json({image: image[0]})
  })
  .catch(function(err){
    console.log(err)
    res.json({err: [{message: 'Problem connecting to the database.'}]})
  })

});

router.post('/', function(req, res, next) {
  db.postImage(req.body.url)
  .then(function(){
    console.log('Image posted!');
  })
  .catch(function(err){
    console.log(err)
    res.json({err: [{message: 'Problem connecting to the database.'}]})
  })

});

module.exports = router;
