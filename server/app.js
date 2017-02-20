var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var app = express();
var router = require('./router');

app.use(bodyParser.json({ typr: '*/*'}));
router(app);
var port = process.env.PORT || 3000;
var server = http.createServer(app);

server.listen(port);
console.log('Severus is listening on ' + port);
