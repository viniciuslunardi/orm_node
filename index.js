const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const port = 3030;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

module.exports = app;