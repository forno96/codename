const abspath = '/usr/src/app';

var express = require('express');
var app = express();
app.use(express.static(abspath + '/client'));

var server = require('http').Server(app);
var io = require('socket.io')(server);

var masters = [];
// Carichiamo il file index.html e mostriamo la pagina al visitatore

app.get('/', (req, res) => {
  res.sendFile(abspath + '/client/index.html'); // sendFile need absolute path
});

// Quando i client si connettono, lo scriviamo nella console
io.sockets.on('connection', function(socket) {
  socket.key = socket.handshake.query.chiave;
  socket.master = false;
  console.log(`Nuovo giocatore connesso a chiave: ${socket.key}`);

  // Quando il server riceve una comunicazione di tipo "flip_card" dal client
  socket.on('flip_card', function(message) {
    console.log(`Carta ${message.id_flip} girata a chiave: ${message.key}`);
    socket.broadcast.emit(`flip_card_${message.key}`, message);
  });

  socket.on('be_master', function(message) {
    socket.master = true;
    if (masters[`${message.key}`] == undefined) masters[`${message.key}`] = 0;

    masters[`${message.key}`] = masters[`${message.key}`] + 1;
    console.log(`Un giocatore è diventato master a chiave: ${socket.key}`);
    console.log(`Ora ci sono ${masters[`${message.key}`]} master a chiave ${message.key}`);
    io.emit(`masters_number_${message.key}`, {'masters': masters[`${message.key}`]});
  });

  socket.on('get_masters', function(message) {
    if (masters[`${message.key}`] == undefined) masters[`${message.key}`] = 0;
    io.emit(`masters_number_${message.key}`, {'masters': masters[`${message.key}`]});
  });

  socket.on('disconnect', function() {
    if (socket.master == true) {
      masters[`${socket.key}`] --;
      console.log(`Master disconnesso a chiave: ${socket.key}`);
      console.log(`Ora ci sono ${masters[`${message.key}`]} master a chiave ${message.key}`);
      io.emit(`masters_number_${socket.key}`, {'masters': masters[`${socket.key}`]});
    }
    else console.log(`Giocatore disconnesso a chiave: ${socket.key}`);
  });
});

var port = '8080';
server.listen(port, () => {
  console.log('Server started at port ' + port + '!');
});
