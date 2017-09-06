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

// });



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
 }); 

app.get('/website/create', function (req, res) {
     req.body.data
});

app.get('/website/delete',function(){

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
        images: [
            {src:'/img/gal/moss1.jpg'},
            {src:'/img/gal/moss2.jpg'},
            {src:'/img/gal/moss3.jpg'}
        ],
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


