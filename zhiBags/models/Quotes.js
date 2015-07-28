var mongoose = require('mongoose');

var QuoteSchema = new mongoose.Schema({
    quote: String,
    author: String
});

mongoose.model('Quote',QuoteSchema);