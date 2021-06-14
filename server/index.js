const ogs = require('open-graph-scraper');
const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.all('/', function (req, res, next) {
    console.log('hello from app/all');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

// Extract Open Graph info.
app.get('/api', (req, res) => {
    const options = {
        url: req.query['url'],
        timeout: 15000,
    };
    ogs(options, (error, results, response) => {
        if (error) {
            console.log('results:', results);
            return res.json(results.err)
        }
        console.log('results:', results);
        return res.json(results);
    });
});


// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});