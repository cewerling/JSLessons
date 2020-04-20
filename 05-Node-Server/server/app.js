require('dotenv').config();

var express = require('express');
var app = express();
var test = require('./controllers/testcontroller');
var authTest = require('./controllers/authtestcontroller');
var user = require('./controllers/usercontroller');
var userInfo = require('./controllers/userinfocontroller');
var sequelize = require('./db');

sequelize.sync();  // tip: pass in {force: true} for resetting tables
// express.json();  // one place had this as needed, but looks like a duplicate of the line below, which this place did not have "app.use(express.json());"
// place: https://elevenfifty.instructure.com/courses/187/pages/changes-to-app-dot-js?module_item_id=13387
app.use(express.json());
app.use(require('./middleware/headers'));

/********************
 * EXPOSED ROUTES
 ********************/
app.use('/test', test);
app.use('/api/user', user);

/*********************
 * PROTECTED ROUTES
 *********************/
app.use(require('./middleware/validate-session'));
app.use('/authtest', authTest);
app.use('/userinfo', userInfo);

app.listen(3000, function() {
    console.log('App is listening on 3000.');
});

app.use('/api/test', function(req, res) {  // This isn't in later modules
    res.send("This is data from the /api/test endpoint.  It's from the server.");
});