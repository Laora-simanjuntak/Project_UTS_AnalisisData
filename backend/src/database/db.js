const mysql = require("mysql2");

const connection = mysql.createConnection({
    host:"localhost",
    user : "root",
    password:"",
    database:"db_web"
});

connection.connect(function (err) {
    if (err) {
        console.log("koneksi gagal", err);
    } else{
        console.log("connecting to database");
    }
});

module.exports = connection;