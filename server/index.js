var _ = require('underscore');
var utils = require('./util').utils;
var express = require('express'),
    app = express(),
    path = require('path'),
    bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', express.static(path.join(__dirname, '../app')));


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../app/index.html'))
});



app.get('/carlos', function (req, res) {
    res.json({ name: 'al' })
});

app.get('/gallery', function (req, res) {


    var titles = utils.getString(9);

    var gallery = _.map(titles, title => ({
        item: title,
        img: 'http://via.placeholder.com/350x350'
    }));
    res.send(gallery)
});






app.listen(3000, function () {
    console.log('Server listening on port ' + this.address().port);
})

