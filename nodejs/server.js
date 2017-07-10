var http = require('http');
var url = require('url');
var util = require('util');
var fs = require('fs'); 

http.createServer(function(req, res) {
	var pathname = url.parse(req.url).pathname;
	
	console.log('Request for ' + pathname + ' received.');

	fs.readFile(pathname.substr(1), function (err, data) {
		if (err) {
			console.log(err);
			res.writeHead(404, {'Content-Type': 'text/html'});
		} else {
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(data.toString());
		}	

		res.end();
	});
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');
