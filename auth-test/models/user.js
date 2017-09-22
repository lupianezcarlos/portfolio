var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/portfolio',{useMongoClient: true},function(err) {
    if(err) console.log(err)
});

mongoose.Promise =  Promise;

var userSchema = new mongoose.Schema({
    email: String,
    password: String
})


module.exports = mongoose.model("User",userSchema);