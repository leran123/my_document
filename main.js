var fs = require("fs")
var data = fs.readFileSync('input.txt')

console.log(data.toString());

console.log("end of program")


fs.readFile('input.txt', function (err, data) {
  if (err) return console.error(err);
  console.log(data.toString());
})

console.log("end ---")


var fs = require('fs');
fs.readFile('input.txt', function (err, data) {
  if (err) {
    console.log(err.stack);
    return;
  }
  console.log(data.toString());
});
  console.log("end program");
///////////////////////////////////////////////////////
var events = require('events');
var eventEmitter = new events.EventEmitter();

//listener #1 
var listener1 = function listener1() {
  console.log('listener1 proc');
}

//listener2
var listener2 = function listener2() {
  console.log('listener2 proc');
}

eventEmitter.addListener('connection', listener1);
eventEmitter.on('connection', listener2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventEmitter + " times listener connect events");

eventEmitter.emit('connection');

eventEmitter.removeListener('connection', listener1);
console.log('listener1 never work!');

eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');

console.log(eventListeners + " listener num");

console.log(" Game over!");

