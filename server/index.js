var _ = require('underscore');
var utils = require('./util').utils;
var express = require('express'),
    sharp = require('sharp'),
    app = express(),
    path = require('path'),
    fs = require('fs'),
    bodyParser = require('body-parser');
    require('./config.js');
    var models = require('./models.js')

var imgsPath = path.join(__dirname, '../images')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', express.static(path.join(__dirname, '../app')));
app.use('/img',express.static(imgsPath));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../app/index.html'))
});

//resize images

// fs.readdirSync(imgsPath).forEach(file => {
//     sharp(imgsPath + '/' + file)
//     .resize(800, 800)
//     .toFile(__dirname+'/../images/gal/'+file, function(err) {
//        if(err)  console.log(err)
//      });

// })

var websModels = models.websitesModel;

var imgs = [
    {src:'/img/gal/moss1.jpg'},
    {src:'/img/gal/moss2.jpg'},
    {src:'/img/gal/moss3.jpg'}
];


websModels.collection.drop();

var web1 = new websModels({
    images: imgs,
    title: "first title",
    description: 'Hello there'
 })


 web1.save(function(err) {
    if(err) console.log(err)
 }) 

app.get('/website/create', function (req, res) {
     req.body.data
});

app.get('/website/delete',function(){

})

app.get('/gallery', function (req, res) {
    var titles = utils.getString(9);

    var gallery = _.map(titles, title => ({
        item: title,
        images: [
            {src:'/img/gal/moss1.jpg'},
            {src:'/img/gal/moss2.jpg'},
            {src:'/img/gal/moss3.jpg'}
        ],
        description: 'Take a look at our website and let me know what do you think'

    }));
    res.send(gallery)
});

// console.log(process.env)

const port = process.env.PORT;

app.listen(port, function () {
    console.log('Server listening on port ' + this.address().port);
})


