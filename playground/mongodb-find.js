/*const MongoClient = require('mongodb').MongoClient;*/
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) {
		return console.log('Unable to connect to mongodb server');
	}
	console.log('Connected to mongodb server');

	/*db.collection('Todos').find({
		_id: new ObjectID('58ee1eb6cd745315b42a3cc5')
	}).toArray().then((docs) => {
		console.log('Todos');
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console.log('unable to fetch todo ', err);
	});*/

	/*db.collection('Todos').find().count().then((count) => {
		console.log('Todos count ',count);
	}, (err) => {
		console.log('unable to fetch todo ', err);
	});*/
	db.collection('Users').find({
		name: 'Mathieu'
	}).toArray().then((docs) => {
		console.log('Users');
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console.log('unable to fetch todo ', err);
	});
	//db.close();
});