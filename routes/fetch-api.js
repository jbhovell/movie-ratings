const axios = require('axios');
const fs = require('fs');
const CryptoJS = require('crypto-js');

const KEY_PATH = '.env.config';
const API_URL = 'https://www.omdbapi.com/';

const fetch = async (mts, lang) => {
  try {
    const apiKey = loadApiKey();
    const urls = mts.map((mt) => `${API_URL}?t=${mt}&apikey=${apiKey}`);

    const allRes = await axios.all(urls.map((u) => axios.get(u,
      {
        header: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        }
      })));
    const sortedMovies = sortByAvgRating(allRes, lang);
    return sortedMovies;
  } catch (e) {
    console.log(e.message);
    throw e;
  }
};

const loadApiKey = () => {
  const file = fs.readFileSync(KEY_PATH, { encoding: 'utf8', flag: 'r' });
  const configLines = file.split('\n');
  const encKey = configLines.find((x) => x.indexOf('apikey') >= 0).split(':')[1];
  const decKey = decryptApiKey(encKey);
  return decKey;
};

const decryptApiKey = (str) => {
  const decKey = CryptoJS.enc.Base64.parse(str).toString(CryptoJS.enc.Utf8);
  return decKey;
};

const sortByAvgRating = (allRes, lang) => {
  const fullSorted = allRes.map((x) => x.data).filter((x) => lang === 'any' || x.Language.toLowerCase().includes(lang)).sort((a, b) => avgRating(b) - avgRating(a));
  const filteredSorted = [];
  for (const m of fullSorted) {
    const obj = {};
    obj.title = m.Title;
    obj.year = m.Year;
    obj.plot = m.Plot;
    obj.lang = m.Language;
    obj.rating = avgRating(m);
    obj.duration = m.Runtime;
    filteredSorted.push(obj);
  }
  return filteredSorted;
};

const avgRating = (d) => {
  let sum = 0;
  let count = 0;
  for (const r of d.Ratings) {
    console.log(r);
    if (r.Value.endsWith('%')) sum += (+r.Value.replace('%', '')) / 100;
    else {
      const nums = r.Value.split('/');
      sum += nums[0] / nums[1];
    }
    count++;
  }
  return +(sum / count).toFixed(2);
};

module.exports = { fetch };
