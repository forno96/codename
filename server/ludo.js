var express = require('express');
var app = express();
var path = require('path');

const abspath = path.join(__dirname, '..');

app.use(express.static(abspath + '/client'));

var server = require('http').Server(app);
var io = require('socket.io')(server);

var game = [];
// Carichiamo il file index.html e mostriamo la pagina al visitatore

app.get('/', (req, res) => {
  res.sendFile(abspath + '/client/index.html'); // sendFile need absolute path
});

// Ad ogni nuova connessione viene aggionaro il contatore delle presenze
io.sockets.on('connection', function(socket) {
  socket.key = socket.handshake.query.chiave;
  socket.master = false;
  if (game[`${socket.key}`] == undefined) game[`${socket.key}`] = { 'players': 0, 'masters': 0, 'turn': 'red'};
  game[`${socket.key}`].players ++ ;
  io.emit(`status_${socket.key}`, {'masters': game[`${socket.key}`].masters, 'players': game[`${socket.key}`].players - game[`${socket.key}`].masters});

  console.log(`Chiave ${socket.key} - Giocatore connesso`);
  console.log(`Chiave ${socket.key} - Ora ci sono ${game[`${socket.key}`].players - game[`${socket.key}`].masters} player e ${game[`${socket.key}`].masters} master`);

  // Flip card riceve il cambio di stato del gioco
  socket.on('flip_card', function(message) {
    console.log(`Chiave ${message.key} - Carta ${message.id_flip} girata`);
    io.emit(`flip_card_${message.key}`, message);
  });

  // Per far riconoscere il master come tale
  socket.on('be_master', function(message) {
    socket.master = true;
    game[`${socket.key}`].masters ++ ;
    io.emit(`status_${socket.key}`, {'masters': game[`${socket.key}`].masters, 'players': game[`${socket.key}`].players - game[`${socket.key}`].masters});

    console.log(`Chiave ${socket.key} - Un giocatore è diventato master`);
    console.log(`Chiave ${socket.key} - Ora ci sono ${game[`${socket.key}`].players - game[`${socket.key}`].masters} player e ${game[`${socket.key}`].masters} master`);
  });

  // Per ottenere aggiornamento del contatore presenze giocatori/master
  socket.on('get_update', function(message) {
    io.emit(`status_${socket.key}`, {'masters': game[`${socket.key}`].masters, 'players': game[`${socket.key}`].players - game[`${socket.key}`].masters});
  });

  // Nel caso di disconnessione bisogna rimuoverli dal contatore dell presenze
  socket.on('disconnect', function() {
    game[`${socket.key}`].players --;
    if (socket.master == true) {
      game[`${socket.key}`].masters --;
      console.log(`Chiave ${socket.key} - Master disconnesso`);
    } else console.log(`Chiave ${socket.key} - Giocatore disconnesso`);

    console.log(`Chiave ${socket.key} - Ora ci sono ${game[`${socket.key}`].players - game[`${socket.key}`].masters} player e ${game[`${socket.key}`].masters} master`);
    io.emit(`status_${socket.key}`, {'masters': game[`${socket.key}`].masters, 'players': game[`${socket.key}`].players - game[`${socket.key}`].masters});
  });
});

var port = '80';
server.listen(port, () => {
  console.log('Server started at port ' + port + '!');
});
