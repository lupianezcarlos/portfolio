
var utils = require('../util').utils;
var isEmail = utils.isEmail;
var authentication= {};

authentication.login = function(app,isAuthenticated){
    isAuthenticated = false || isAuthenticated;
    app.post('/auth',function(req, res) {
        
        var user = req.body;
        
        if(isEmail(user.email)) {
            res.send(user)
        }
    });
}


module.exports.auth = authentication;