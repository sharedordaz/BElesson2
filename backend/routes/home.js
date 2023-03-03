const express = require('express');

const router = express.Router();

const controller = require("../controllers/contacts.js")

const path = require('path');

router.get('/', (req, res) => {
 //res.sendFile('../../frontend/test.html', {root: '.'});
 res.send('<h1>Welcome to Home!</h1> <br> <button onclick="location.href=`/contact`" type="button">Go to contact</button>');
});




module.exports = router;

