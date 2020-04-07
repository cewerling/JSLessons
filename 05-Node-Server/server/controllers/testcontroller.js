var express = require('express');
var router = express.Router();
var sequelize = require ('../db');
var TestModel = sequelize.import('../models/test');

/****************************************
 * Controller Method #1: Simple Response
****************************************/

 router.post('/one', function(req, res) {
     res.send("Test 1 went through!")
 });


/****************************************
 * Controller Method #1: Simple Response
****************************************/

router.post('/two', function(req, res) {
    let testData = "Test data for endpoint two";

    TestModel
      .create({
          testdata: testData
      }).then(dataFromDatabase => {
          res.send("Test two went through!")
      })
});

module.exports = router;





/*  OLD test methods from before MVC (Model View Controller module)

router.get('/', function(req, res) {
    res.send('Hey!!! This is a test route!');
})

router.get('/about', function(req, res) {
    res.send('Hey!!! This is an about route');
})


let contactObj = {
    "user": "Kenn",
    "email": "kenn@bestmode.com"
};
router.get('/contact', function(req, res) {
    res.send(contactObj);
})


let projectArr = ["Project 1", "Project 2"]
router.get('/projects', function(req, res) {
    res.send(projectArr);
})

let contactObjArr = [
    {
        "user": "kenn",
        "email": "kenn@beastmode.com"
    },
    {
        "user": "aaron",
        "email": "aaron@beastmode.com"
    },
    {
        "user": "quincy",
        "email": "quincy@beastmode.com"
    },
    {
        "user": "tom",
        "email": "tom@beastmode.com"
    },
]
router.get('/mycontacts', function(req, res) {
    res.send(contactObjArr);
})
*/