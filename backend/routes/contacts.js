const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json();
})

/*app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);}
)*/

module.exports = router;

