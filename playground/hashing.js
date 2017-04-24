const {SHA256} =require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
var password = '123abc!';
/*bcrypt.genSalt(10, (err, salt) => {
	bcrypt.hash(password, salt, (err, hash) => {
		console.log(hash);
	});
});*/

var hashedPassword = '$2a$10$p5m/lF0AuIFMd21/wdOACuBOJ8RCrM7FLLovVLixJFCij5dLipSs.';

bcrypt.compare(password, hashedPassword, (err,res) => {
	console.log(res);
});

/*var data = {
	id: 10
};

var token = jwt.sign(data,'123abc');
var decoded = jwt.verify(token, '123abc');
console.log(decoded);*/

/*var msg = 'I am user number 3';
var hash = SHA256(msg).toString();

console.log(hash);*/


