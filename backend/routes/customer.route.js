const express = require("express");
const customerController = require("../controllers/customer.controller");

const customerRouter = express.Router();

customerRouter.get("/api/customers", customerController.getListCustomers);

module.exports = customerRouter;