const express = require('express');
const router = express.Router();

// User Model
const User = require('../../models/User.js');

// @route GET api/user
// @desc Get All Users
// @access Public
router.get('/', (req, res) => {
    User.find()
    .then(users => res.json(users))
});

// @route POST api/user
// @desc Create User
// @access Public
router.post('/', (req, res) => {
    const newUser = new User({
        name: req.body.name
    });

    newUser.save().then(user => res.json(user));
})

module.exports = router;