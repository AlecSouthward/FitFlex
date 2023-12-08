const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    perms: {
        type: Number
    }
});

module.exports = mongoose.model('User', userSchema);