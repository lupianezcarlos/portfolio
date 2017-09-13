
var utils = require('../util').utils;
var isEmail = utils.isEmail;
var authentication= {};

authentication.login = function(app,isAuthenticated){
    isAuthenticated = false || isAuthenticated;
    app.get('/auth',function(req, res) {
         console.log('login post')
        var user = req.body.data;
        res.send(user)
        if(isEmail(user.email)) {
            res.send(user)
        }
    });
}


module.exports.auth = authentication;