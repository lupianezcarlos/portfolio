var express = require('express'),
    app = express();
    openRoute = express.Router(),
    authRoute = express.Router(),
    utils     = require('./util').utils,
    data = require('./data'),
    path = require('path'),
    multer = require('multer');
    var emailSender = require('./email.js').sender;
    var config = require('./config.js');
 
    var multer = require('multer');
    var upload = multer({
        dest: __dirname + '/../app/uploads/',
    });

    var auth = {};

    auth.init = (req, res, next) => {
        req.user = 'carlos';
        next();
     }

     auth.canAccess = (req, res, next) => {
          if (req.user === 'arlos') {
              console.log('logged!')
              res.redirect('/')
          } else {
              res.redirect('/login')
          }
      };


    //Private routes
    authRoute.use(auth.init); 
    authRoute.use(auth.canAccess);

    authRoute.get('/required',function(req,res) {
        res.send('auth')
   });


    authRoute.get('/website/create', function (req, res) {
        req.body.data;
    });

    authRoute.get('/website/delete',function(){ 

    });
    
    authRoute.post('/uploads', upload.array(), function (req, res, next) {
        return res.ok();
    });

    //Open routes
    openRoute.get('/', function (req, res) {
        console.log('hello'+data)
        // res.send(data);
        // res.sendFile(path.join(__dirname, '../app/index.html'))
    });

    openRoute.post('/contact/email',function(req,res) {
        let  user = req.body;
        if(utils.isEmail(user.email)) {
            var account = {
                subject: user.name + ' ' + user.lastname + ' from "My Portfolio"',
                email: user.email,
                html: user.message
            }
         emailSender(config.emailConfig, account);
        res.status(200).json({status:'ok'})
        }
        
    });

    openRoute.get('/login',function(req,res) {
        res.send(req.body)
    });

    openRoute.get('/gallery', function (req, res) {
         res.send(data.gallery)
    });

    app.post('/uploads', upload.array(), function (req, res, next) {
        console.log('hello upload');
        return res.ok();
    });
    
// app.get('/upload',function(req,res) {
//     res.send(res.body)
// })

module.exports.apiOpen = openRoute;
module.exports.apiAuth = authRoute;    