//express
const express = require('express');
const port = process.env.PORT || 8080;
const app = express();

const bodyParser = require('body-parser');

const contactsRouter = require('./routes/contacts.js');
const homeRouter = require('./routes/home.js');
const defaultRouter = require('./routes/default.js');



const mongodb = require('./db/connect');
const connect = require('./controllers/clients.js');



const URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.nzpdodr.mongodb.net/?retryWrites=true&w=majority`;

///////Process.env.PORT means whatever port the hosting service (heroku, render) is using

//app.use(express.text());
//app.use(express.json());
app.use(bodyParser.json())
app
.use(bodyParser.json())
.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', "*");
  next();
})
.use("/", require('./routes/home.js'));


app.use(bodyParser.json())
.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', "*");
  next();
})
.use("/contact", contactsRouter);


app.use("/", defaultRouter);

//Submit all app.use routers
app.listen(port, ()=>{
  console.log(`Server running at port ${port}`);
})


