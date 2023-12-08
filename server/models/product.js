const mongoose = require('mongoose');

let productSchema = mongoose.Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    },
    desc: {
        type: String
    },
    img: {
        type: String
    }
});

module.exports = mongoose.model('Product', productSchema);