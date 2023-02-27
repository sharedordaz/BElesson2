const express = require('express');

const controller = require("../controllers/clients.js")

const router = express.Router();


router.get ('/' , controller.getAllContacts);


router.get (`/:id` , controller.getSingle);


module.exports = router;

