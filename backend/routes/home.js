const express = require('express');

const router = express.Router();

const controller = require("../controllers/clients.js")

const path = require('path');

router.get('/', (req, res) => {
 //res.sendFile('../../frontend/test.html', {root: '.'});
 res.send('<h1>Welcome to contacts!</h1>');
})

router.post('/', controller.createNew);

router.put('/', controller.updateCont);
router.delete('/', controller.delCont);



module.exports = router;

