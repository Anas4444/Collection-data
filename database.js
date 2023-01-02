const mysql = require('mysql');

var connection = mysql.createConnection({
	host : 'mydb.ckl1zkh9idqi.us-east-1.rds.amazonaws.com',
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
				var sql = "CREATE TABLE IF NOT EXISTS sample_data (id INT(10) NOT NULL PRIMARY KEY, first_name VARCHAR(250) NOT NULL, last_name VARCHAR(250) NOT NULL, age VARCHAR(30) NOT NULL, gender VARCHAR(30) NOT NULL) ENGINE=InnoDB DEFAULT CHARSET=latin1";
				connection.query(sql, function (err) {
					if (err) throw err;
					console.log("Table created");
					
					var sqlalter = "ALTER TABLE sample_data MODIFY id int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5"
					connection.query(sqlalter, function(err) {
						if (err) throw err;
						console.log("Table successfully modified");
					})
				});
			});
		});
	}
});

module.exports = connection;
