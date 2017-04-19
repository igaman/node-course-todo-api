var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
/*mongoose.connect('mongodb://igaman:448788@ds163360.mlab.com:63360/todoapp' || 'mongodb://localhost:27017/TodoApp');*/
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
