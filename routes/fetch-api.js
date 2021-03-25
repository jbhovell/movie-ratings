const axios = require('axios')
const { Parser } = require('json2CSV')
const fs = require('fs')
const CryptoJS = require('crypto-js');
const { title } = require('process');

const encrypt = str => {
    const encKey = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(str));
    return encKey
};

const decrypt = str => {
    const decKey = CryptoJS.enc.Base64.parse(str).toString(CryptoJS.enc.Utf8);
    return decKey
};

//test for axios.all

const loadAndDecryptApiKey = () => {
    const file = fs.readFileSync('env.config', { encoding: 'utf8', flag: 'r' });
    const configLines = file.split('\n')
    const encKey = configLines.find(x => x.indexOf('apikey') >= 0).split(':')[1]
    var decKey = decrypt(encKey)
    return decKey
}
const fetch = async (...mts) => {
    try {
        const apiKey = loadAndDecryptApiKey();
        const urls = mts.map(mt => `https://www.omdbapi.com/?t=${mt}&ApiKey=${apiKey}`)

        const allRes = await axios.all(urls.map(u => axios.get(u)));
        const sortedMovies = sortByAvgRating(allRes)
        return sortedMovies

    } catch (e) {
        console.log(e.message)
    }
}

const sortByAvgRating = (allRes) => {
    const fullSorted = allRes.map(x => x.data).sort((a, b) => avgRating(b) - avgRating(a))
    const filteredSorted = []
    for (const m of fullSorted) {
        let obj = {}
        obj.title = m.Title
        obj.year = m.Year
        obj.rating = avgRating()
        filteredSorted.push(obj)
    }
    return filteredSorted;
}

const avgRating = (d) => {
    let sum = 0
    let count = 0
    for (const r of d.Ratings) {
        console.log(r)
        if (r.Value.endsWith('%'))
            sum += (+r.Value.replace('%', '')) / 100
        else {
            const nums = r.Value.split('/')
            sum += nums[0] / nums[1]
        }
        count++
    }
    return sum / count.toFixed(2);
}

const outputCSV = (mv) => {
    const parser = new Parser();
    const formatted = parser.parse(mv);
    return formatted
}

module.exports = { fetch, outputCSV }