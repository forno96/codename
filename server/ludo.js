var express = require('express');
var app = express();
app.use(express.static('../client'));

var server = require('http').Server(app);
var io = require('socket.io')(server);

// Carichiamo il file index.html e mostriamo la pagina al visitatore
const abspath = '/usr/src/app';
app.get('/', (req, res) => {
  res.sendFile(abspath + '/client/index.html'); // sendFile need absolute path
});

// Quando i client si connettono, lo scriviamo nella console
io.sockets.on('connection', function(socket) {
  console.log('Nuovo visitatore connesso!');
  socket.emit('message', 'Sei connesso amico!');

  // Quando il server riceve una comunicazione di tipo "message" dal client
  socket.on('flip_card', function(message) {
    console.log(`Card flipped id: ${message.id_flip}, key: ${message.key}`);
    socket.broadcast.emit('flip_card', message);
  });
});

var port = '8080';
server.listen(port, () => {
  console.log('Server started at port ' + port + '!');
});
