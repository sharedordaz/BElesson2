//express
const express = require('express');
const app = express();
///////Process.env.PORT means whatever port the hosting service (heroku, render) is using
const port = process.env.PORT || 8080;

const dotenv = require("dotenv");

const bodyParser = require('body-parser');
//const cors = require('cors');

const connect = require('./db/connect.js');

const contactsRoute = require('./routes/contacts.js');
const homeRoute = require('./routes/home.js');



dotenv.config();
const URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.nzpdodr.mongodb.net/?retryWrites=true&w=majority`;

//console.log("DB URI: " + URI);
//console.log("USER: " + process.env.DB_USERNAME );

connect.executeCRUDquery();

app.use("/", homeRoute);
app.use("/contact", contactsRoute);

app.listen(port, ()=>{
  console.log(`Server running at port ${port}`);
})

