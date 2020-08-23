'user strict';

var mysql = require('mysql');

// local mysql db connection
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'newuser',
    password: '',
    database: 'regsystem',
    multipleStatements: true
});

connection.connect(function (err) {
    if (err) throw err;
    else console.log("hi");
});

module.exports = connection;