var events = require('events')
var eventEmitter = new events.EventEmitter();

var connectHandler = function connected() {
  console.log('connect success')
  eventEmitter.emit('data_received');
}

eventEmitter.on('connection', connectHandler);

eventEmitter.on('data_received', function() {
  console.log('data_received success');
});

eventEmitter.emit('connection');

console.log("end program==");
//////////////////////////////////////////////////
var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();
event.on('some_event', function() {
  console.log('on some event');
});
setTimeout(function() {
  event.emit('some_event');
}, 1000);
///////////////////////////////////////////////////

var events = require('events');
var emitter = new events.EventEmitter();
emitter.on('someEvent', function(arg1, arg2) {
  console.log('listener1', arg1, arg2);
});

emitter.on('someEvent', function(arg1, arg2) {
  console.log('listener2', arg1, arg2);
});

emitter.emit('someEvent', 'arga www', 'argb xxx');


