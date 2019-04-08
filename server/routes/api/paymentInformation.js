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
    .then(paymentinformations => res.json(paymentinformations))
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
        bookings: {}
    });
    let bookings = new Map(newPaymentInformation.bookings);
    bookings.set(req.body.date, req.body.venueID);
     
    newPaymentInformation.bookings = bookings;

    newPaymentInformation.save().then(paymentInformation => res.json(paymentInformation))
            .catch(err => res.status(400).json({error : `${err}`}));

})

// @route PUT api/paymentInformation/book/:id
// @desc Update payment with new bookings
// @access Public
// Req Params: paymentInformationID, date, venueID
router.put('/book/:id', (req, res) => {
    if (Venue.findById(req.body.paymentInformationID) != null)
    {
        Venue.findById(req.params.id)
            .then(venue => {
                let bookings = new Map(paymentInformation.bookings);
                if (!(bookings.has(req.body.date)))
                {
                    bookings.set(req.body.date, req.body.venueID);
                    paymentInformation.bookings = bookings;
                    paymentInformation.save().then(() => res.json({"success":"true"})).catch(err => res.json(err));
                }
                else{
                    res.status(400).json({"success":"false"})
                }
            })
            .catch(err => res.status(400).json({error: `${err}`}));
    }
    // Payment does not exist
    else
    {
        res.status(400).json({'success' : 'false', 'message':'Venue does not exist'});
    }    
})

module.exports = router;
