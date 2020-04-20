const router = require('express').Router();
const UserInfo = require('../db').import('../models/userinfo');
const validateSession = require('../middleware/validate-session');

/****************************************
 * Create User Info                   ***
****************************************/
router.post('/', validateSession, (req, res) => {

    const userInfoFromRequest = {
        dateOfBirth: req.body.userinfo.dateOfBirth,
        age: req.body.userinfo.age,
        heightInInches: req.body.userinfo.height,
        weightInPounds: req.body.userinfo.weight,
        goal: req.body.userinfo.goal
    }

    UserInfo
      .create(userInfoFromRequest)
      .then(userInfo => {res.status(200).json(userInfo)})
      .then(err => res.json(req.errors));
});


/****************************************
 * Delete User Info                   ***
****************************************/
router.delete('/delete/:id', validateSession, (req, res) => {
    const userInfoID = req.params.id;

    UserInfo
      .destroy({where: { id: userInfoID }})
      .then(userInfo => {res.status(200).json(userInfo)})
      .then(err => res.json(req.errors));
});






module.exports = router;