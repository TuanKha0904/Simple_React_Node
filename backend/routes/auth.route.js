const express = require("express");
const authController = require("../controllers/auth.controller");
require("../untils/database");

const AuthRouter = express.Router();

AuthRouter.post("/api/register", authController.register);

module.exports = AuthRouter;