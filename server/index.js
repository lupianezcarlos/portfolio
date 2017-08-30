var _ = require('underscore');
var utils = require('./util').utils;
var express = require('express'),
    app = express(),
    path = require('path'),
    bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', express.static(path.join(__dirname, '../app')));
app.use('/img',express.static(path.join(__dirname, '../images')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../app/index.html'))
});

console.log(path.join(__dirname, '/img'))

app.get('/carlos', function (req, res) {
    res.json({ name: 'al' })
});

app.get('/gallery', function (req, res) {


    var titles = utils.getString(9);

    var gallery = _.map(titles, title => ({
        item: title,
        images: [
            {src:'/img/lorempixel.jpg'},
            {src:'/img/lorempixel-1.jpg'},
            {src:'/img/lorempixel-2.jpg'}
        ]

    }));
    res.send(gallery)
});

const port = process.env.PORT;

app.listen(port, function () {
    console.log('Server listening on port ' + port);
})


