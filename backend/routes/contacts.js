const express = require('express');

const controller = require("../controllers/contacts.js")

const router = express.Router();


router.get ('/' , controller.getAllContacts);


router.get (`/:id` , controller.getSingle);

router.post('/', controller.createNew);

router.put('/:id', controller.updateCont);
router.delete('/:id', controller.delCont);


module.exports = router;

