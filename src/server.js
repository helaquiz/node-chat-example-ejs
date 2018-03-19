const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

let server = express();
let port = 3000;

server.use(bodyParser.json());
server.use(cors());

server.get('/', function (req, res, next) {
    
});

server.listen(port, function () {
    console.log(`Server running at http://localhost:${port}`);
});