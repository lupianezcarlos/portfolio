var express = require('express'),
    app = express();
    openRoute = express.Router(),
    authRoute = express.Router(),
    utils     = require('./util').utils,
    data = require('./data'),
    path = require('path'),
    multer = require('multer');
    
 
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

    // openRoute.get('/',function(req,res) {
    //     console.log(data)
    //     res.json(data);
    // });

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