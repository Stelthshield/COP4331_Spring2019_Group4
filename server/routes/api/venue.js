const express = require('express');
const router = express.Router();

// Venue Model
const Venue = require('../../models/Venue.js');

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
            venue.save();
            res.json(venue);
        })
        .catch(err => res.status(404).json({error: `${err}`}))
});


module.exports = router;
