const express = require('express');
const router = express.Router();

router.use('/', require('./swagger'));

router.use('/contacts', require('./contacts') );

router.get('*', function (req,res) {
  res.send('Undefined route')
})


module.exports = router;
