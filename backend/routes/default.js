const express = require('express');
const router = express.Router();

//Undefined routes
router.get('*', function (req,res) {
  res.send('Undefined route')
})

module.exports = router;
