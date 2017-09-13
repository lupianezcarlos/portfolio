var _ = require('underscore');
var utils = require('./util').utils;
var express = require('express'),
    sharp = require('sharp'),
    app = express(),
    path = require('path'),
    fs = require('fs'),
    cors = require('cors'),
    bodyParser = require('body-parser');
    require('./config.js');
    var models = require('./models.js')

var imgsPath   = path.join(__dirname, '../images');
var uploadPath = path.join(__dirname,'../uploads');

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', express.static(path.join(__dirname, '../app')));
app.use('/img',express.static(imgsPath));
app.use('/uploads',express.static(uploadPath));

var auth = require('./auth/index').auth;

auth.login(app,false);

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../app/index.html'))
});


var multer = require('multer');
var upload = multer({
    dest: __dirname + '/../app/uploads/',
});

// app.get('/upload',function(req,res) {
//     res.send(res.body)
// })

app.post('/uploads', upload.array(), function (req, res, next) {
    console.log('hello upload');
    return res.ok();
});

//resize images

// fs.readdirSync(imgsPath).forEach(file => {
//     sharp(imgsPath + '/' + file)
//     .resize(800, 800)
//     .toFile(__dirname+'/../images/gal/'+file, function(err) {
//        if(err)  console.log(err)
//      });

// });



var websModels = models.websitesModel;

var imgs = {
    0:[
        {src:'/img/gal/strata1.JPG'},
        {src:'/img/gal/strata2.JPG'},
        {src:'/img/gal/strata3.JPG'}
    ],
    1:[
        {src:'/img/gal/infinity1.JPG'},
        {src:'/img/gal/infinity2.JPG'},
        {src:'/img/gal/infinity3.JPG'}
    ],
    2:[
        {src:'/img/gal/tapestry1.JPG'},
        {src:'/img/gal/tapestry2.JPG'},
        {src:'/img/gal/tapestry3.JPG'}
    ],
    3:[
        {src:'/img/gal/moss1.jpg'},
        {src:'/img/gal/moss2.jpg'},
        {src:'/img/gal/moss3.jpg'}
    ],
    4:[
        {src:'/img/gal/verve1.JPG'},
        {src:'/img/gal/verve2.JPG'},
        {src:'/img/gal/verve3.JPG'}
    ],
    5:[
        {src:'/img/gal/block431.JPG'},
        {src:'/img/gal/block432.JPG'},
        {src:'/img/gal/block433.JPG'}
    ],
    6:[
        {src:'/img/gal/juanes1.JPG'},
        {src:'/img/gal/juanes2.JPG'}
    ],
    7:[
        {src:'/img/gal/dallas1.JPG'},
        {src:'/img/gal/dallas2.JPG'},
        {src:'/img/gal/dallas3.JPG'}
    ],
    8:[
        {src:'/img/gal/evian1.JPG'},
        {src:'/img/gal/evian2.JPG'},
        {src:'/img/gal/evian3.JPG'}
    ]
       
    
   
};


websModels.collection.drop();

var web1 = new websModels({
    images: imgs,
    title: "first title",
    description: 'Hello there'
 })

 web1.save(function(err) {
    if(err) console.log(err)
 }); 

app.get('/website/create', function (req, res) {
     req.body.data
});

app.get('/website/delete',function(){

});



app.get('/login',function(req,res) {
    res.send(req.body)
});



app.get('/gallery', function (req, res) {
    var titles = utils.getString(9);
    var lks = [
        'http://dev-strata.razzdev.io/',
        'http://www.infinitywestshore.com/',
        'http://www.tapestrynaperville.com/',
        'http://www.mosscompany.com/',
        'http://www.vervedenver.com/',
        'http://www.block43apts.com/',
        'http://dev-juanes-main.razzdev.io/musica/',
        'http://dev-live-dallas-deluxe.razzdev.io/',
        'http://dev-evian-splash-page.razzdev.io/',
        // 'http://machetemusic.umg-wp-stage.com/',
        // 'http://www.pastificiocarbone.it/',
        // 'http://dev-alta-camelback-main.razzdev.io/'
    ]
    var names = [
        'strata','infinity','tapestry','moss company','verver','block43','juanes','dallas splash','evian splash'
    ]
    var gallery = _.map(titles, (title,index) => ({
        item: title,
        images: imgs[index],
        name: names[index],
        link:lks[index],
        description: 'Website description!'

    }));
    
    res.send(gallery)
});


// console.log(process.env)

const port = process.env.PORT;

app.listen(port, function () {
    console.log('Server listening on port ' + this.address().port);
})


