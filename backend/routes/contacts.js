const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
  res.send('Contact route is displaying data');
})

/*app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);}
)*/

module.exports = router;

