const express = require("express");
const request = require("request");
// mysql dependancy here
var path = require("path");
var bodyParser = require("body-parser");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static(path.join(__dirname, 'client', 'build')));

//db conncetion here

//api routes here



app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });

app.listen(PORT, function () {
    console.log("App running on port " + PORT);
});