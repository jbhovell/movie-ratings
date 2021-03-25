var express = require('express');
var router = express.Router();
const { fetch } = require('./fetch-api')

/* GET movies listing. */
router.get('/', async function (req, res, next) {
  const data = await fetch(req.query.mt1, req.query.mt2, req.query.mt3);
  console.log(data)
  res.status(200).render('layout', {
    row1: JSON.stringify(data[0]),
    row2: JSON.stringify(data[1]),
    row3: JSON.stringify(data[2]),
  });
});

module.exports = router;
