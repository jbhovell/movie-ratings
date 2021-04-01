const express = require('express');

const router = express.Router();
const fs = require('fs');
const { fetch } = require('./fetch-api');

const OUTPUT_NAME = './ratings.csv';

/* GET movies listing. */
router.get('/', async (req, res, next) => {
  const data = await fetch([req.query.mt1, req.query.mt2, req.query.mt3], req.query.lang);
  saveFile(data);
  res.status(200).render('layout', {
    body: getRows(data),
  });
});

const getRows = (data) => {
  const th = '<h1>Rate Movies</h1><tr><th>Title</th><th>Rating</th><th>Language</th><th>Year</th><th>Story</th></tr>';
  // if any title is invalid, show N/A in all the rows
  let row1 = '<tr><td>N/A</td><td>N/A</td><td>N/A</td><td>N/A</td><td>N/A</td></tr>';
  let row2 = '<tr><td>N/A</td><td>N/A</td><td>N/A</td><td>N/A</td><td>N/A</td></tr>';
  let row3 = '<tr><td>N/A</td><td>N/A</td><td>N/A</td><td>N/A</td><td>N/A</td></tr>';
  if (data && data[0]) row1 = `<tr><td>${data[0].title}</td><td>${data[0].rating}</td><td>${data[0].lang}</td><td>${data[0].year}</td><td>${data[0].plot}</td></tr>`;
  if (data && data[1]) row2 = `<tr><td>${data[1].title}</td><td>${data[1].rating}</td><td>${data[1].lang}</td><td>${data[1].year}</td><td>${data[1].plot}</td></tr>`;
  if (data && data[2]) row3 = `<tr><td>${data[2].title}</td><td>${data[2].rating}</td><td>${data[2].lang}</td><td>${data[2].year}</td><td>${data[2].plot}</td></tr>`;
  return `${th}${row1}<br/>${row2}<br/>${row3}`;
};

const saveFile = (data) => {
  let csvStr = 'Title,Rating,Lnguage,Year,Summary\n';

  for (const d of data) {
    csvStr += `${d.title},${d.rating},${d.lang.replace(/(,\s*)/g, '.')},${d.year},${d.plot.replace(/(,\s*)/g, '.')}\n`;
  }
  fs.writeFileSync(OUTPUT_NAME, csvStr);
  return csvStr;
};
module.exports = router;
