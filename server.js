const express = require('express');
const app = express();

require('dotenv').config({path: './config/.env'});
require("./config/db");


app.listen(process.env.PORT);