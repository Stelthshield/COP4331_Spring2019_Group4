const express = require('express');
const router = express.Router();

// Venue Model
const Venue = require('../../models/Venue.js');
// User Model
const User = require('../../models/User.js');

// @route GET api/venue
// @desc Get All Venues
// @access Public
router.get('/', (req, res) => {
    Venue.find()
    .then(venues => res.json(venues))
});

// @route POST api/venue
// @desc Create venue
// @access Public
router.post('/', (req, res) => {
    let newVenue = new Venue({
        zipCode: req.body.zipCode,
        streetAddress: req.body.streetAddress,
        ownerID: req.body.ownerID,
        pricePerDay: req.body.price,
        bookings: {},
        verification: false
    });
    newVenue.save().then(venue => res.json(venue))
            .catch(err => res.status(400).json({error : `${err}`}));
})

// @route DELETE api/venue
// @desc Delete venue
// @access Public
router.delete('/:id', (req, res) => {
    Venue.findById(req.params.id)
        .then(venue => venue.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({error: `${err}`}));
});

// @route PUT api/venue
// @desc Edit Venue
// @access Public
router.put('/:id', (req, res) => {
    Venue.findById(req.params.id)
        .then(venue => {
            if (req.body.price != null)
                venue.pricePerDay = req.body.pricePerDay;
            if (req.body.verification != null)
                venue.verification = req.body.verification;
            venue.save().then(() => res.json(venue))
        })
        .catch(err => res.status(404).json({error: `${err}`}))
});

// @route PUT api/user/book/:id
// @desc Book a date
// @access Public
router.put('/book/:id', (req, res) => {

    if (User.findById(req.params.userID) != null)
    {
        Venue.findById(req.params.id)
            .then(venue => {
                let bookings = new Map(venue.bookings);
                if (!bookings.has(req.body.date))
                {
                    bookings.set(req.body.date, req.body.userID);
                    venue.bookings = bookings;
                    venue.save().then(() => res.json({"success":"true"}));
                }
                else{
                    res.status(400).json({"success":"false"})
                }
            })
            .catch(err => res.status(400).json({error: `${err}`}));
    }
    // User does not exist
    else
    {
        res.status(400).json({'success' : 'false', 'message':'User does not exist'});
    }    
})

module.exports = router;
