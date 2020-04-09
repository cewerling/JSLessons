var jwt = require('jsonwebtoken');
var sequelize = require('../db');
var User = sequelize.import('../models/user');

module.exports = function(req, res, next) {
    if (req.method == 'OPTIONS') {
        next()
    } else {
        var sessionToken = req.headers.authorization;
        console.log('');
        console.log('');
        console.log('******** Headers = ' + JSON.stringify(req.headers) + '*********');
        console.log('******** Content-Type = ' + JSON.stringify(req.headers['content-type']) + '*********');
        console.log('******** Authorization = ' + JSON.stringify(req.headers['authorization']) + '*********');
        console.log('******** Session Token = ' + sessionToken + '*********');
        if (!sessionToken) return res.status(403).send({ auth: false, message: 'No token provided.'});
        else {
            jwt.verify(sessionToken, process.env.JWT_SECRET, (err, decoded) => {
                if (decoded) {
                    User.findOne({where: { id: decoded.id}}).then(user => {
                        console.log('***********Inside decoded and findOne');
                        req.user = user;
                        next();
                    },
                    function(){
                        res.status(401).send({error: 'Not authorized'});
                        console.log('************Error 401');
                    });
                } else {
                    res.status(400).send({error: 'Not authorized'});
                    console.log('**********Error 400');
                }
            });
        }
    }
}