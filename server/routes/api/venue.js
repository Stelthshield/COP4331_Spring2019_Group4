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
    .catch(err => res.json(err))
});

// @route GET api/venue/getByQuery
// @desc Get Venues specified by your query
// @access Public
router.get('/getByQuery', (req, res) => { 
    let query = {};
    let allowedParams = ['_id', 'ownerID', 'zipCode', 'verification'];
    for(param in req.body) 
    {
        if(allowedParams.includes(param)) {
            query[param] = req.body[param];
        }
    }
    Venue.find(query)
    .then(venues => res.json(venues))
    .catch(err => res.json(err));
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


// @route PUT api/venue/unbook/:id
// @desc Unbook a date
// @access Public
router.put('/unbook/:id', (req, res) => {
    //Venue.update({"_id":req.body.id}, )
    
    Venue.findById(req.params.id)
    .then(venue => {
        let bookings = new Map(venue.bookings);
        bookings.set(req.body.date, undefined);
        venue.bookings = bookings;
        venue.save().then(() => res.json({success:"true"}));
    }).catch(err => res.json(err));
    
});

// @route GET api/venue/checkAvailibility/:id
// @desc Check if date is open
// @access Public
router.get('/checkAvailibility/:id', (req, res) => {
    Venue.findById(req.params.id)
    .then(venue => {
        let bookings = new Map(venue.bookings);
        if (bookings.has(req.body.date) || venue.verification == false)
            res.json({"availibility":false});
        else
            res.json({"availibility":true});
    }).catch(err => res.json(err));
});

// @route GET api/venue/getOwnerID/:id
// @desc Get venue's owner id
// @access Public
router.get('/getOwnerID/:id', (req, res) => {
    Venue.findById(req.params.id)
    .then(venue => {
        res.json({"ownerID": venue.ownerID});
    }).catch(err => res.json(err));;
});

// @route GET api/venue/checkVerification/:id
// @desc Get venue's owner id
// @access Public
router.get('/checkVerification/:id', (req, res) => {
    Venue.findById(req.params.id)
    .then(venue => {
        res.json({"verification": venue.verification});
    }).catch(err => res.json(err));;
});

// @route PUT api/venue/verify/:id
// @desc Sets the venue as verified
// @access Public
router.put('/verify/:id', (req, res) => {
    Venue.findById(req.params.id)
    .then(venue => {
        venue.verification = true;
        venue.save().then(venue => res.json(venue));
    }).catch(err => res.json(err));;
});

// @route PUT api/venue/unverify/:id
// @desc Sets the venue as unverified
// @access Public
router.put('/unverify/:id', (req, res) => {
    Venue.findById(req.params.id)
    .then(venue => {
        venue.verification = false;
        venue.save().then(venue => res.json(venue));
    }).catch(err => res.json(err));;
});
module.exports = router;
