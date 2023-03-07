const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');

router.get('/', contactsController.getAllContacts);

router.get('/:id', contactsController.getSingle);

router.post('/', contactsController.createNew);

router.put('/:id', contactsController.updateCont);

router.delete('/:id', contactsController.delCont);

module.exports = router;
