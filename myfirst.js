var http = require('http');
var dateTime = require('./my_modules/date-module');

http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url);
  res.end();
}).listen(8080);
