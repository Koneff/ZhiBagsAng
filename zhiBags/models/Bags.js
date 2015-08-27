var mongoose = require('mongoose');

var BagSchema = new mongoose.Schema({
    title: String,
    desc: String,
    pic: String,
    price: {type: Number, default: 140}
});
BagSchema.methods.upprice = function(cb){
    this.price+=5;
    this.save(cb);
};

mongoose.model('Bag',BagSchema);