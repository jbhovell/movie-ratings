var express = require('express');
var router = express.Router();
const { fetch } = require('./fetch-api')

/* GET movies listing. */
router.get('/', async function (req, res, next) {
  const data = await fetch(req.query.mt1, req.query.mt2, req.query.mt3);
  const th = '<tr><th>Title</th><th>Year</th><th>Rating</th></tr>'
  const row1 = `<tr><td>${data[0].title}</td><td>${data[0].year}</td><td>${data[0].rating}</td></tr>`;
  const row2 = `<tr><td>${data[1].title}</td><td>${data[1].year}</td><td>${data[1].rating}</td></tr>`;
  const row3 = `<tr><td>${data[2].title}</td><td>${data[2].year}</td><td>${data[2].rating}</td></tr>`;

  res.status(200).render('layout', {
    body: `${th}${row1}<br/>${row2}<br/>${row3}`
  });
});

module.exports = router;
