var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-i'});
	
	//var params = url.parse(req.url. true).query;
	//res.write("net name: " + params['name']);
	//res.write('net url: ' + params['url']);
	
	res.end(util.inspect(url.parse(req.url, true)));
}).listen(3000);
