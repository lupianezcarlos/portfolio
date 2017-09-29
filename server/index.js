var _ = require('underscore');
var utils = require('./util').utils;
var express = require('express'),
    sharp = require('sharp'),
    app = express(),
    path = require('path'),
    fs = require('fs'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    apiRoutes = require('./routes');
    var config = require('./config.js');
    var models = require('./models.js')
    var data = require('./data');

var imgsPath   = path.join(__dirname, '../images');
var uploadPath = path.join(__dirname,'../uploads');

//middlewares
app.use(cors());
var carlos = 'carlos';
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../app')));
app.use('/img',express.static(imgsPath));
app.use('/uploads',express.static(uploadPath));

//authentication
var auth = require('./auth/index').auth;
auth.login(app,false);



//resize images
// fs.readdirSync(imgsPath).forEach(file => {
//     sharp(imgsPath + '/' + file)
//     .resize(800, 800)
//     .toFile(__dirname+'/../images/gal/'+file, function(err) {
//        if(err)  console.log(err)
//      });

// });

var websModels = models.websitesModel;

var imgs = data.imgs;

websModels.collection.drop();

var web1 = new websModels({
    images: imgs,
    title: "first title",
    description: 'Hello there'
 });

 web1.save(function(err) {
    if(err) console.log(err)
 }); 

// Routes 
app.use('/required',apiRoutes.apiAuth);
app.use('/api',apiRoutes.apiOpen);


const port = config.port;
app.listen(port, function () {
    console.log('Server listening on port ' + this.address().port);
})


