const mysql = require("mysql2/promise");
require('dotenv').config();

const mysqlConnection = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

mysqlConnection.getConnection()
    .then(connection => {
        console.log("Connection to database successfully!");
        connection.release(); // Release the connection back to the pool
    })
    .catch(err => {
        console.error("Error connecting to the database: ", err.message);
    });

module.exports = mysqlConnection;