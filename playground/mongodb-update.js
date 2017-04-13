/*const MongoClient = require('mongodb').MongoClient;*/
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) {
		return console.log('Unable to connect to mongodb server');
	}
	console.log('Connected to mongodb server');
	/*db.collection('Todos').findOneAndUpdate({
		_id : new ObjectID('58ef374fd4e64916318fc487')
	}, {
		$set: {
			completed: true
		}
	}, {
		returnOriginal: false
	}).then((res) => {
		console.log(res);
	})*/
	//challenge
	db.collection('Users').findOneAndUpdate({
		name: "Mathieu"
	}, {
		$set: {
			name: 'Mat'
		},
		$inc: {
			age: 1
		}
	},
	{
		returnOriginal: false
	}).then((res) => {
		console.log(res);
	})
	
	//db.close();
});