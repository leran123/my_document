

console.log(__filename);
console.log(__dirname);
function printHello() {
	console.log('hello world');
	console.trace();
	console.timeEnd('mytest');
};

t = setTimeout(printHello, 2000);
//clearTimeout(t);

//tt = setInterval(printHello, 3000);
console.error('error happened');
console.time('mytest');
//console.trace();
console.log(process.arch);
console.log(process.cwd());
console.log(process.version);

var util = require('util');
function Person() {
	this.name = 'xi';
	this.toString = function() {
		return this.name;
	};
}

var obj = new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj, true));
console.log(util.inspect(new Date()));
