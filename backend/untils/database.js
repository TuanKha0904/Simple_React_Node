const mysql = require("mysql2");
require('dotenv').config();

const mysqlConnection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

mysqlConnection.connect((err)=>{
    if(err)
        console.log(err.message);
    console.log("Connection to database successfully!");
});

module.exports = mysqlConnection;