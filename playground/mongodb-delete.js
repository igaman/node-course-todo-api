/*const MongoClient = require('mongodb').MongoClient;*/
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) {
		return console.log('Unable to connect to mongodb server');
	}
	console.log('Connected to mongodb server');
	//delete Many
	/*db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
		console.log(result);
	});*/
	//delete One
	/*db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
		console.log(result);
	});*/

	//find and delete
	/*db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
		console.log(result);
	});*/

	//challenge
	/*db.collection('Users').deleteMany({name: "Mathieu"}).then((res) => {
		console.log(res);
	})*/

	db.collection('Users').findOneAndDelete({_id: new ObjectID('58ee45f551e9bc3c5cd2e503')}).then((res) => {
		console.log(res);
	})
	//db.close();
});