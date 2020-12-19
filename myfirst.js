var http = require('http');

http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello there! Welcome to the new world of nodejs!!!')
}).listen(8080);
