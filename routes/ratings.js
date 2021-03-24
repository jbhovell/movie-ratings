var express = require('express');
var router = express.Router();
const { fetch, outputCSV } = require('./fetch-api')

/* GET users listing. */
router.get('/', async function (req, res, next) {
  console.log(req.params.m1)
  const data = await fetch();
  //res.status(200).json(data);
  res.status(200).render('layout', { body: outputCSV(data)});
});

module.exports = router;
