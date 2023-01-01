const mysql = require('mysql');

var connection = mysql.createConnection({
	host : 'localhost',
	database : 'testing',
	user : 'admin',
	password : 'anas123456789!'
});

connection.connect(function(error){
	if(error)
	{
		throw error;
	}
	else
	{
		console.log('MySQL Database is connected Successfully');
	}
});

module.exports = connection;