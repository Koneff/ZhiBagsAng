var mongoose = require('mongoose');

var BagSchema = new mongoose.Schema({
    title: String,
    desc: String,
    pic: String,
    price: {type: Number, default: 140}
});

BagSchema.methods.changePrice = function(cp){
    this.price += Math.round((this.price*dif)/100);
    this.save(cp);
};

mongoose.model('Bag',BagSchema);