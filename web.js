var express = require('express');

// IO dependencies
var util = require('util');
var fs = require('fs');
//var rest = require('restler');
//var csv = require('csv');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
	var buffer = new Buffer(fs.readFileSync('./index.html'));
//	buffer.write(fs.readFileSync('./index.html'));
//	fs.readFileSync('./index.html');
	response.send(buffer.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
