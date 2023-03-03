//express
const express = require('express');
const port = process.env.PORT || 8080;

const bodyParser = require('body-parser');

const mongodb = require('./db/connect');

const app = express();

const URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.nzpdodr.mongodb.net/?retryWrites=true&w=majority`;

///////Process.env.PORT means whatever port the hosting service (heroku, render) is using

//app.use(express.text());
//app.use(express.json());


//ADMIN MIDDLEWARES FOR ROUTERS
app
.use(bodyParser.json())
.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
})
.use('/', require('./routes/contacts.js'));


/*app.use(bodyParser.json())
app
.use(bodyParser.json())
.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', "*");
  next();
})
.use("/", require('./routes/home.js'));


app.use("/", require('./routes/default.js'));*/

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});
//Submit all app.use routers



