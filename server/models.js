var mongoose = require('mongoose');

var conn = mongoose.connect('mongodb://localhost:27017/portfolio',{  useMongoClient: true},function(err){
  console.log(err)
}); 

mongoose.Promise = global.Promise;
  var websitesSchema = new mongoose.Schema({
      title: String, 
      images: Object,
      description: String
  })

  module.exports.websitesModel = mongoose.model('Website',websitesSchema)