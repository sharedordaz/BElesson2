const express = require('express');

const controller = require("../controllers/contacts.js")

const router = express.Router();

//Undefined routes
router.get('*', function (req,res) {
  res.send('Undefined route')
})

module.exports = router;
