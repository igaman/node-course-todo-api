var mongoose = require('mongoose');
var env = process.env.NODE_ENV || 'development';

mongoose.Promise = global.Promise;

if(env === 'development') {
	mongoose.connect('mongodb://localhost:27017/TodoApp');
} else {
	mongoose.connect('mongodb://igaman:448788@ds163360.mlab.com:63360/todoapp');
}

module.exports = {mongoose};
