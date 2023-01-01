const mysql = require('mysql');

var connection = mysql.createConnection({
	host : 'localhost',
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
		connection.query("CREATE DATABASE IF NOT EXISTS testing", function (err) {
			if (err) throw err;
			console.log("Database created");

			connection.query("USE testing", function (err) {
				if (err) throw err;
				console.log("Database testing is being used");
				var sql = "CREATE TABLE IF NOT EXISTS sample_data (id INT(10) NOT NULL, first_name VARCHAR(250) NOT NULL, last_name VARCHAR(250) NOT NULL, age VARCHAR(30) NOT NULL, gender VARCHAR(30) NOT NULL)";
				connection.query(sql, function (err, result) {
					if (err) throw err;
					console.log("Table created");
				});
			});
		});
	}
});

module.exports = connection;