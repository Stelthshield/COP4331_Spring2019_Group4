const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create User Schema
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    billingInfo: {
        type: String,
        required: false
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = User = mongoose.model('user', UserSchema);
