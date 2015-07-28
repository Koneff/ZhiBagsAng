var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');


var Bag = mongoose.model('Bag');
var Quote = mongoose.model('Quote');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/bags', function(req, res, next) {
    Bag.find(function(err, bags){
        if(err){ return next(err); }

        res.json(bags);
    });
});

router.post('/bags', function(req,res,next){
    var bag = new Bag(req.body);

    bag.save(function(err,bag){
        if(err){return next(err);}
        res.json(bag);
    })
});

module.exports = router;
