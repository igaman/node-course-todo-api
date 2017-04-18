const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


var userId = '58ef7dfa09ccc724044b2f47';

var id ='58f5eed772cf98c42d048dc4';

if(!ObjectID.isValid(id)) {
	console.log('Id not valid');
}

/*Todo.find({
	_id: id
}).then((todos) => {
	console.log('Todos',todos);
});

Todo.findOne({
	_id: id
}).then((todos) => {
	console.log('Todos',todos);
});*/

Todo.findById(id).then((todo) => {
	if(!todo) return console.log('id not found');
	console.log('Todo By Id', todo);
}).catch((e) => console.log(e))

User.findById(userId).then((user) => {
	if(!user) return console.log('user id not found');
	console.log('User By Id', user);
}).catch((e) => console.log(e));