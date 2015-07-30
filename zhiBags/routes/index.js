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

router.param('bag', function(req, res, next, id) {
    var query = Bag.findById(id);

    query.exec(function (err, bag){
        if (err) { return next(err); }
        if (!bag) { return next(new Error('can\'t find product')); }

        req.bag = bag;
        return next();
    });
});

router.get('/bags/:bag', function(req, res) {
    res.json(req.bag);
});



router.get('/quotes', function(req, res, next) {
    Quote.find(function(err, quotes){
        if(err){ return next(err); }

        res.json(quotes);
    });
});

router.post('/quotes', function(req,res,next){
    var quote = new Quote(req.body);

    quote.save(function(err,quote){
        if(err){return next(err);}
        res.json(quote);
    })
});

module.exports = router;
