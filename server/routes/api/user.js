const express = require('express');
const router = express.Router();

// User Model
const User = require('../../models/User.js');

// @route GET api/user
// @desc Get All Users
// @access Public
// Req Params: 
// Optional Params:
router.get('/', (req, res) => {
    User.find()
    .then(users => res.json(users))
});

// @route GET api/user/auth-user
// @desc Get a User
// @access Public
// Req Params: 
// Optional Params:
router.post('/auth-user', (req, res) => {
    User.findOne({
        name: req.body.email,
        password: req.body.password
    })
        .then(successOrNot => res.status(200).json({success: true}))
            .catch(err => res.json({success: false}))
});
// @route POST api/user
// @desc Create User
// @access Public
// Req Params: name
// Optional Params: account
router.post('/', (req, res) => {
    const newUser = new User({
        name: req.body.name,
        password: req.body.password
    });

    newUser.save().then(user => res.json(user));
})

// @route DELETE api/user
// @desc Delete User
// @access Public
// Req Params: id
// Optional Params:
router.delete('/:id', (req, res) => {
    User.findById(req.params.id)
        .then(user => user.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success:false}));
});

// @route PUT api/user
// @desc Edit User
// @access Public
// Req Params: name
// Optional Params: billingInfo
router.put('/:id', (req, res) => {
    User.findById(req.params.id)
        .then(user => {
            if (req.body.name != null)
                user.name = req.body.name;
            if (req.body.billingInfo != null)
                user.billingInfo = req.body.billingInfo;
            user.save();
            res.json(user);
        })
        .catch(err => res.status(404).json({error: 'Something went wrong'}))
});

// @route GET api/user/getByQuery
// @desc Get User specified by your query
// @access Public
// Req Params: 
// Optional Params: _id, name
router.get('/getByQuery', (req, res) => { 
    let query = {};
    let allowedParams = ['_id', 'name'];
    for(param in req.body) 
    {
        if(allowedParams.includes(param)) {
            query[param] = req.body[param];
        }
    }
    User.find(query)
    .then(users => res.json(users))
    .catch(err => res.json(err));
});
module.exports = router;
