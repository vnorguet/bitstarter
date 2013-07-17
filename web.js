var express = require('express');

// IO dependencies
var util = require('util');
var fs = require('fs');

var app = express.createServer(express.logger());

console.log(app);
app.get('/', function(request, response) {
//  console.log(request['route']);
  var buffer = new Buffer(fs.readFileSync('./index.html'));
  response.send(buffer.toString('utf-8'));
});
app.get('/assets/:type/:filename', function(request, response) {
  console.log('into assets' + request.params.type + ' ' + request.params.filename);
  var buffer= new Buffer(fs.readFileSync('assets/' + request.params.type + "/" + request.params.filename));
  response.send(buffer.toString('utf-8'));
});


var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
