const {SHA256} =require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
	id: 10
};

var token = jwt.sign(data,'123abc');
var decoded = jwt.verify(token, '123abc');
console.log(decoded);

/*var msg = 'I am user number 3';
var hash = SHA256(msg).toString();

console.log(hash);*/


