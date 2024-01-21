const mysql = require("mysql2/promise");

const connection = mysql.createPool({
    host:"localhost",
    user : "root",
    password:"",
    database:"db_web"
});

connection.on('connection', function (connection) {
    console.log('koneksi database berhasil');
    connection.on('error', function (err) {
      console.error(new Date(), 'MySQL error', err.code);
    });
    connection.on('close', function (err) {
      console.error(new Date(), 'MySQL close', err);
    });
});

module.exports = connection;