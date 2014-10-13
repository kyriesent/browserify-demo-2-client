var socket = require('socket.io-client')('kyriesent.ngrok.com:80');
socket.on('connect', function(){
  socket.on('event', function(data){});
  socket.on('disconnect', function(){});
});

var supersecrethash = require('./supersecrethash');

var Client = function () {
  return this;
}

Client.prototype.send = function(text) {
  text = text.substr(0, 140)
  socket.emit('client text', supersecrethash, text);
};

var client = new Client;

module.exports = client;