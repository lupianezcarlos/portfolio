var _ = require('underscore');
var utils = require('./util').utils;
var express = require('express'),
    sharp = require('sharp'),
    app = express(),
    path = require('path'),
    bodyParser = require('body-parser');
    require('./config.js');

var imgPath = path.join(__dirname, '../images')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', express.static(path.join(__dirname, '../app')));
app.use('/img',express.static(imgPath));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../app/index.html'))
});


sharp(imgPath + '/moss13.jpg')
    .resize(190, 190)
    .toFile(__dirname+'/../images/moss13.jpg', function(err) {
        console.log(err)
    // output.jpg is a 200 pixels wide and 200 pixels high image
    // containing a scaled and cropped version of input.jpg
});

app.get('/carlos', function (req, res) {
    res.json({ name: 'al' })
});

app.get('/gallery', function (req, res) {


    var titles = utils.getString(9);

    var gallery = _.map(titles, title => ({
        item: title,
        images: [
            {src:'/img/moss1.jpg'},
            {src:'/img/moss2.jpg'},
            {src:'/img/moss3.jpg'}
        ]

    }));

    
    res.send(gallery)
});

// console.log(process.env)

const port = process.env.PORT;

app.listen(port, function () {
    console.log('Server listening on port ' + this.address().port);
})


