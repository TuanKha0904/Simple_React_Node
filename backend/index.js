const express = require("express");
const bodyParser = require("body-parser");
const AuthRouter = require("./routes/auth");
require("./untils/database");
require("dotenv").config();

const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.json());
app.use(AuthRouter);

app.listen(PORT);