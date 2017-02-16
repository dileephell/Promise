
var mongoose = require('mongoose');
var Schema =   mongoose.Schema;

var carSchema  = new Schema ({
    name : String
});
module.exports = mongoose.model('models',carSchema);
//module.exports = mongoose.model('make',carSchema);
