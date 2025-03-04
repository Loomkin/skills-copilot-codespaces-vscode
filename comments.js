// Create web server
// 1. Create a web server with Express
// 2. Create a route to handle GET requests to /comments
// 3. Read the comments.json file and send the data back as the response
// 4. Listen on port 3000

const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.get('/comments', (req, res) => {
    fs.readFile('comments.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('An error occurred');
            return;
        }

        res.json(JSON.parse(data));
    });
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});