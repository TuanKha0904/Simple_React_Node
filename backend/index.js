const express = require("express");
const mysql = require("mysql2");
const app = express();
const connectDB = async () => {
    mysql.createConnection({
        host: "localhost:3306",
        user: "root",
        password: "root123",
        database: "Simple"
    });
}
connectDB();
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.listen(5000);