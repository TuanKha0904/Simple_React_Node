const express = require("express");
require("../untils/database");

const AuthRouter = express.Router();

AuthRouter.get("/api", (req, res) => {
    res.json({message:"Hello World!", status: 200});
});

module.exports = AuthRouter;