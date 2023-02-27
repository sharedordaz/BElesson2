//express
const express = require('express');
const app = express();
///////Process.env.PORT means whatever port the hosting service (heroku, render) is using
const port = process.env.PORT || 8080;

const dotenv = require("dotenv");

const bodyParser = require('body-parser');
const cors = require('cors');

const connect = require('./controllers/clients.js');

const contactsRouter = require('./routes/contacts.js');
const homeRouter = require('./routes/home.js');



dotenv.config();
const URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.nzpdodr.mongodb.net/?retryWrites=true&w=majority`;

//console.log("DB URI: " + URI);
//console.log("USER: " + process.env.DB_USERNAME );

connect.getAllContacts();


app.use("/", homeRouter);
app.use("/contact", contactsRouter);

let contacts = [];

app.use(cors());
//bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/contact', (req, res) => {
    const contact = req.body;

    // Output the book to the console for debugging
    console.log(contact);
    contacts.push(contact);

    res.send(`Contact: ${contact} is added to the database`);
});



//Submit all app.use routers
app.listen(port, ()=>{
  console.log(`Server running at port ${port}`);
})

