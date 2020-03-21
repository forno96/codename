var socket = io.connect(window.location.href);

var showed_cards;
var status;

function main(st) {
  showed_cards = [];
  for (var k = 0; k < 25; k++) {showed_cards[k] = false;}
  status = st; // master | player
  gen_cards(); // Dato il seed "chiave" tutti sono sincronizzati

  $("#start").hide(); // Per cancellare la schermata di base

  for (var i = 0; i < 25; i++) { // Genera le 25 carte
    if (i%5 == 0) $("#center").append(`<div class="row justify-content-center">`);
    if (status == "player") { // Stile per la vista giocatore
      $(".row:last").append(`
        <div class="card bg-secondary text-center col-2 m-1 px-1" id="${i}" style="border-width: 2px;">
          <a href="javascript:_flipCard(${i})" style="text-decoration:none;" class="text-dark" id="card">
            <div class="card-body px-1">
              <h3 class="card-text font-weight-bold">${cards[i]}</h3>
              </div>
          </a>
        </div>
      `);
    }
    else { // Stile per la vista master
      $(".row:last").append(`
        <div class="card bg-secondary text-center col-2 m-1 px-1" id="${i}" style="border-width: 2px;">
          <a href="javascript:_flipCard(${i})" style="text-decoration:none;" class="text-dark" id="card">
            <div class="card-title">
              <p id ="title">Not showed</p>
            </div>
            <div class="card-body px-1">
              <h3 class="card-text font-weight-bold">${cards[i]}</h3>
            </div>
          </a>
        </div>
      `);
    }
  }

  if (status == "master") {
    status = "player";
    for (var j = 0; j < 25; j++) flipCard(j); // Per colorare le card senza modivicare la scritta
    status = "master";

    for (var h = 0; h < 25; h++) showed_cards[h] = false;

    $("#center").append(`<h1 class="text-light mt-5">MASTER VIEW</h1>`);
  }
}

function _flipCard(id){
  if (status == "master") {
    console.log('flip');
    flipCard(id);
    console.log(showed_cards);
    socket.emit('flip_card', {'id_flip': id, 'state': showed_cards});
  }
}

socket.on('flip_card', function(message){
  console.log("change state recived");
  console.log(message);
  for (var i = 0; i < 25; i++) if (message.state[i] == true) flipCard(i);
});

function flipCard(id){
  if (showed_cards[id]==false){
    showed_cards[id]=true;
    if (status == 'master') {
      $(`#${id} #title`).text("Showed");
    }
    else {
      $(`#${id}`).removeClass("bg-secondary");

      switch (color[id]) {
        case "blue":
          $(`#${id}`).addClass("bg-primary");
          break;
        case "red":
          $(`#${id}`).addClass("bg-danger");
          break;
        case "white":
          $(`#${id}`).addClass("bg-light");
          break;
        case "black":
          $(`#${id} a`).removeClass("text-dark");
          $(`#${id} a`).addClass("text-white");
          $(`#${id}`).addClass("bg-dark");
          $(`#${id}`).addClass("border-white");
          break;
        default:
      }
    }
  }
}
