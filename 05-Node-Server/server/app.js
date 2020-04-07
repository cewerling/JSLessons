var express = require('express');
var app = express();
var test = require('./controllers/testcontroller')
var sequelize = require('./db');

sequelize.sync();  // tip: pass in {force: true} for resetting tables

app.use('/test', test)

app.listen(3000, function() {
    console.log('Hey man!!!');
});

app.use('/api/test', function(req, res) {
    res.send("This is data from the /api/test endpoint.  It's from the server.");
});