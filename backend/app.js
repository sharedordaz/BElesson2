//import { executeCRUDquery } from "./db/connect.js";
const executeCRUDquery = require('./db/connect.js').executeCRUDquery;
//express
const express = require('express');
const app = express();
///////Process.env.PORT means whatever port the hosting service (heroku, render) is using
const port = process.env.PORT || 8080;

const dotenv = require("dotenv");

dotenv.config();
console.log("DB URI: " + process.env.DB_URI);
console.log("USER: " + process.env.DB_USERNAME );

//executeCRUDquery();

app.get('/', (req, res) => {
  res.send('Sending GET solicitude');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);}
)
