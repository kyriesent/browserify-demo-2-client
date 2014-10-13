var socket = require('socket.io-client')('kyriesent.ngrok.com');
socket.on('connect', function(){
  socket.on('event', function(data){});
  socket.on('disconnect', function(){});
});