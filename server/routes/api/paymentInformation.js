const express = require('express');
const router = express.Router();

// Venue Model
const Venue = require('../../models/Venue.js');
// User Model
const User = require('../../models/User.js');
// Payment Information Model
const PaymentInformation = require('../../models/PaymentInformation.js');

// @route GET api/paymentInformation
// @desc Get All payment information
// @access Public
router.get('/', (req, res) => {
    PaymentInformation.find()
    .then(paymentInformations => res.json(paymentInformations))
    .catch(err => res.json(err))
});


// @route POST api/paymentInformation
// @desc Create payment entity
// @access Public
// Req Params: cardType, cardNumber, expirationDate, CVV, userID
router.post('/', (req, res) => {
    let newPaymentInformation = new PaymentInformation({
        cardType: req.body.cardType,
        cardNumber: req.body.cardNumber,
        expirationDate: req.body.expirationDate,
        CVV: req.body.CVV,
        userID: req.body.userID,
        bookings: {},
    });
    newPaymentInformation.save().then(paymentInformation => res.json(paymentInformation))
            .catch(err => res.status(400).json({error : `${err}`}));
})

module.exports = router;
