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
 * Controller Method #2: Persisting Data
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

/****************************************
 * Controller Method #3: req.body
****************************************/

router.post('/three', function(req, res) {
    let testData = req.body.testdata.item;

    TestModel
      .create({
          testdata: testData
      })
    res.send("Test three went through!");
    console.log("Test three went through!");
});

router.post('/four', function(req, res) {
    let testData = req.body.testdata.item;
    TestModel
      .create({
          testdata: testData
      })
      .then(
        function message() {
           res.send("Test 4 went through!");
        }
      );
});


/****************************************
 * Route 5: Return data in a Promise
****************************************/

router.post('/five', function(req, res) {
    let testData = req.body.testdata.item;

    TestModel
      .create({
          testdata: testData
      })
      .then(
        function message(data) {
           res.send(data);
        }
      );
});





/****************************************
 * Route 6: Return data as JSON
****************************************/

router.post('/six', function(req, res) {
    let testData = req.body.testdata.item;

    TestModel
      .create({
          testdata: testData
      })
      .then(
        function message(testdata) {
           res.json( {
               testdata: testdata
           });
        }
      );
});



/****************************************
 * Route 7: Handle errors
****************************************/

router.post('/seven', function(req, res) {
    let testData = req.body.testdata.item;

    TestModel
      .create({
          testdata: testData
      })
      .then(
        function createSuccess(testdata) {
           res.json( {
               testdata: testdata
           });
        },
        function createError(err) {
            res.send(500, err.message);
        }
      );
});



/****************************************
 * GET: Get simple message from server
****************************************/

router.get('/helloclient', function(req, res) {
    res.send("This is a message from the server to the client.")
})




/****************************************
 * GET: /one
****************************************/

router.get('/one', function(req, res) {

    TestModel
      .findAll ({
          attributes: ['id', 'testdata']
      })
      .then (
          function findAllSuccess(data) {
              console.log("Controller data:", data);
              res.json(data);
          },
          function finaAllError(err) {
              res.send(500, erro.message);
          }
      );
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