//express
const express = require('express');
const app = express();
//////////////////
const port = 8080;

//mongodb
const MongoClient = require('mongodb').MongoClient;
const mongodb = require("./db/connect.js");

const router = require('./routes/router.js')

//bodyParser
const bodyParser = require('body-parser');

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);}
)
