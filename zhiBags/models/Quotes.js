var mongoose = require('mongoose');

var QuoteSchema = new mongoose.schema({
    quote: String,
    author: String
});

mongoose.model('Quote',QuoteSchema);