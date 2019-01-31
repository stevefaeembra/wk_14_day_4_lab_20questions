var express = require('express');
var app = express();
var http = require('http').Server(app); // local server
var io = require('socket.io')(http);

io.on( 'connection', (socket) => {

  socket.on('submit-question', (message) => {
    // guesser is sending question to server
    console.dir(message);
    io.sockets.emit('recieve-question',message);
  });
  socket.on('receive-question', (message) => {
    // server is sending question to chooser
    console.dir(message);
    io.sockets.emit('submit-answer',message);
  });
  socket.on('submit-answer', (message) => {
    // chooser is sending answer (Yes/No/Win) to Server
    console.dir(message);
    io.sockets.emit('receive-answer', message);
  });
  socket.on('receive-answer', (message) => {
    // server is sending question to guesser
    console.dir(message);
    io.sockets.emit('submit-question, message');
  });
})

app.get('/', function (req, res) {
  res.send("Server running");
});

app.use(express.static('client/build'));

// allows cross origin resource sharing
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var server = http.listen(3001, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
