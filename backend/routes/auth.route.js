const express = require("express");
const authController = require("../controllers/auth.controller");
require("../untils/database");

const AuthRouter = express.Router();

AuthRouter.post("/api/register", authController.register);
AuthRouter.post("/api/login", authController.login);

module.exports = AuthRouter;