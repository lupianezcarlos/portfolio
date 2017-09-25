var express      = require('express'),
    app          = express(),
    jwt          = require('jsonwebtoken'),
    User         = require('./models/user'),
    bodyParser   = require('body-parser'),
    path         =require('path'),
    cors         = require('cors');


    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cors());
    app.use('/',express.static(path.join(__dirname , 'app')));

console.log(path.join(__dirname , 'app/'))

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname, 'index.html'))
})

//    user.save(function(err,user) {
//        if(!err) console.log(user)
//    })

    app.post('/users',function(req,res){
         var user = {
             email: req.body.email,
             password: req.body.password
         };

          User.find(user).lean().exec(function(err, users){
              res.send(users)
          });
   
    })



    app.listen(3000, function() {
        console.log('connected on port 3000')
    });