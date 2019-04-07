const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const user = require('./routes/api/user');
const venue = require('./routes/api/venue');
const paymentInformation = require('./routes/api/paymentInformation');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// User Routes
app.use('/api/user', user);
//  Venue Route
app.use('/api/venue', venue);
// Payment Information Route
app.use('/api/paymentInformation', paymentInformation);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
