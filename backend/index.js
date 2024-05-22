const express = require("express");
const bodyParser = require("body-parser");
const AuthRouter = require("./routes/auth.route");
const CustomerRouter = require("./routes/customer.route");
const cors = require("cors");
require("dotenv").config();
require("./untils/database");

const PORT = process.env.PORT || 80;

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(AuthRouter);
app.use(CustomerRouter);

app.listen(PORT);