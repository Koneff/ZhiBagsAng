var mongoose = require('mongoose');

var BagSchema = new mongoose.Schema({
    title: String,
    desc: String,
    pic: String,
    price: {type: Number, default: 140}
});

mongoose.model('Bag',BagSchema);