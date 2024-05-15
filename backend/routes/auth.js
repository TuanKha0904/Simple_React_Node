const express = require("express");
const mysqlConnection = require("../untils/database");

const AuthRouter = express.Router();

AuthRouter.get("/", (req, res) => {
    res.send("Hello World!");
});

module.exports = AuthRouter;