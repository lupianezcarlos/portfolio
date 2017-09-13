var express = require('express'),
    app = express();
    openRoute = express.Router(),
    authRoute = express.Router(),
    utils     = require('./util').utils,
    data = require('./data'),
    _ = require('underscore');
    
    var auth = {};
 

    auth.init = (req, res, next) => {
        new Promise(function(resolve, reject    ) {
            resolve(req.user = 'carlos');
        })
        

     }
 


    //  app.use(auth.init); 

     auth.canAccess = (req, res, next) => {
        req.user =  'carlos';
        if (req.user === 'carlos') {
            console.log('logged!')
            next();
        } else {
            console.log('come on!')
        }
        
    };
    
   

    //private routes
    authRoute.use(auth.canAccess);

    authRoute.get('/required',function(req,res) {
        res.send('auth')
   });


    //opened routes
    openRoute.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../app/index.html'))
    });

    openRoute.get('/gallery', function (req, res) {
        var titles = utils.getString(9);
       
        var gallery = _.map(titles, (title,index) => ({
            item: title,
            images: data.imgs[index],
            name: data.names[index],
            link:data.lks[index],
            description: 'Website description!'
    
        }));
        
        res.send(gallery)
    });



module.exports.apiOpen = openRoute;
module.exports.apiAuth = authRoute;    