var express = require('express');
var router = express.Router();
const { fetch } = require('./fetch-api')

/* GET movies listing. */
router.get('/', async function (req, res, next) {
  const data = await fetch(req.query.mt1, req.query.mt2, req.query.mt3);
  const th = '<tr><th>Title</th><th>Rating</th><th>Language</th><th>Year</th><th>Summary</th></tr>'
  // if any title is invalid, show N/A in all the rows
  let row1 = '<tr><td>N/A</td><td>N/A</td><td>N/A</td><td>N/A</td><td>N/A</td></tr>';
  let row2 = '<tr><td>N/A</td><td>N/A</td><td>N/A</td><td>N/A</td><td>N/A</td></tr>';
  let row3 = '<tr><td>N/A</td><td>N/A</td><td>N/A</td><td>N/A</td><td>N/A</td></tr>';
  if (data && data[0])
    row1 = `<tr><td>${data[0].title}</td><td>${data[0].rating}</td><td>${data[0].lang}</td><td>${data[0].year}</td><td>${data[0].plot}</td></tr>`;
  if (data && data[1])
    row2 = `<tr><td>${data[1].title}</td><td>${data[1].rating}</td><td>${data[1].lang}</td><td>${data[1].year}</td><td>${data[1].plot}</td></tr>`;
  if (data && data[2])
    row3 = `<tr><td>${data[2].title}</td><td>${data[2].rating}</td><td>${data[2].lang}</td><td>${data[2].year}</td><td>${data[2].plot}</td></tr>`;
  res.status(200).render('layout', {
    body: `${th}${row1}<br/>${row2}<br/>${row3}`
  });
});

module.exports = router;
