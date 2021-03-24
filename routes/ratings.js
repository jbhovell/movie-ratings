var express = require('express');
var router = express.Router();
const { fetch, outputCSV } = require('./fetch-api')

/* GET movies listing. */
router.get('/', async function (req, res, next) {
  const data = await fetch(req.query.mt1, req.query.mt2, req.query.mt3);
  res.status(200).render('layout', { body: JSON.stringify(data) });
});

module.exports = router;
