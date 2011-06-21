var http = require('http'),
    fs = require('fs');

http.createServer(function(req, res) {
  var type, file;
  if (~req.url.indexOf('shim.htc')) {
    type = 'text/x-component';
    file = '../shim.htc';
  } else if (~req.url.indexOf('shim.min.htc')) {
    type = 'text/x-component';
    file = '../shim.min.htc';
  } else {
    type = 'text/html';
    file = 'test.html';
  }
  file = __dirname + '/' + file;
  fs.stat(file, function(err, stat) {
    res.writeHead(200, {
      'Content-Type': type + '; charset=utf-8',
      'Content-Length': stat.size
    });
    fs.createReadStream(file).pipe(res);
  });
}).listen(8080);