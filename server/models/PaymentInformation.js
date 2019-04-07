const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Payment Information Schema
const PaymentInformationSchema = new Schema({
    cardType: {
        type: String,
        required: true
    },
    cardNumber: {
        type: String,
        required: true
    },
    expirationDate: {
        type: String,
        required: true
    },
    CVV: {
        type: String,
        required: true
    },
    userID: {
        type: String,
        required: true
    },
    bookings: {
        type: Map,
    },
})

module.exports = PaymentInformation = mongoose.model('paymentInformation', PaymentInformationSchema);
