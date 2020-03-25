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
  console.log('Nuovo visitatore connesso!');

  // Quando il server riceve una comunicazione di tipo "flip_card" dal client
  socket.on('flip_card', function(message) {
    console.log(`Card flipped id: ${message.id_flip}, key: ${message.key}`);
    socket.broadcast.emit(`flip_card_${message.key}`, message);
  });

  socket.on('be_master', function(message) {
    socket.master = true;
    socket.key = message.key;
    if (masters[`${message.key}`] == undefined) masters[`${message.key}`] = 0;
    if (masters[`${message.key}`] < 2) {
      console.log(`Nuovo master a chiave: ${message.key}`);
      masters[`${message.key}`] = masters[`${message.key}`] + 1;
      socket.emit(`confirm_master_${message.key}`, {'leftMasters': 2 - masters[`${message.key}`]})
    } else {
      console.log(`Tentativo di nuovo master fallito a chiave: ${message.key}`);
    }
  });

  socket.on('disconnect', function() {
    try {
      if (socket.master == true) {
        masters[`${socket.key}`] --;
        console.log(`Master disconnesso a chiave: ${socket.key}`);
      }
      else {
        console.log(`Visitatore disconnesso`);
      }
    } catch {
      console.log(`Visitatore disconnesso`);
    }
  });
});

var port = '8080';
server.listen(port, () => {
  console.log('Server started at port ' + port + '!');
});
