const express = require("express");
require("dotenv").config();
const cors = require('cors');
const database = require('./config/connection');
var bodyParser = require('body-parser')
const route = require('./routes/router')
const path = require('path')

const port = 8080
const app = express()
app.use(bodyParser.json())
app.use('/public', express.static('images'));

app.use(cors());
app.use('/idmb', route)
database()

app.listen(port, () => {
    console.log(`listening at port ${port}`)
})