const express = require("express");
const bodyParser = require("body-parser");
const AuthRouter = require("./routes/auth");
const cors = require("cors");
require("./untils/database");
require("dotenv").config();

const PORT = process.env.PORT || 80;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(AuthRouter);

app.listen(PORT);