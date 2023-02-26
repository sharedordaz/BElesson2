//import { executeCRUDquery } from "./db/connect.js";

//express
const express = require('express');
const app = express();
///////Process.env.PORT means whatever port the hosting service (heroku, render) is using
const port = process.env.PORT || 8080;

const dotenv = require("dotenv");

const connect = require('./db/connect.js');


dotenv.config();
const URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.nzpdodr.mongodb.net/?retryWrites=true&w=majority`;

console.log("DB URI: " + URI);
console.log("USER: " + process.env.DB_USERNAME );

connect.executeCRUDquery();

app.get('/', (req, res) => {
  res.send('Sending GET solicitude');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);}
)
