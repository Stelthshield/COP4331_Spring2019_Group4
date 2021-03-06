const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create User Schema
const VenueSchema = new Schema({
    zipCode: {
        type: String,
        required: true
    },
    streetAddress: {
        type: String,
        required: true
    },
    ownerID: {
        type: String,
        required: true
    },
    bookings: {
        type: Map,
        //required: true
    },
    pricePerDay: Number,
    verification: {
        type: Boolean,
        //required: true
    }
})
module.exports = Venue = mongoose.model('venue', VenueSchema);
