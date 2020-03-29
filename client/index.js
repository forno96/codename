var socket = io.connect(window.location.href);

var showed_cards;
var status;

var point;

$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
       return null;
    }
    else{
       return results[1] || 0;
    }
};

var key = $.urlParam("chiave");
if (key == null){
   // Per cancellare i bottoni di base e reimpiazzarli
  $("#start").html(`
    <h2 class="text-light mt-4">Inserisci la chiave</h2>
    <div class="row justify-content-center">
      <form class="form-group">
        <div class="input-group input-group-lg">
          <input type="text" name="chiave" class="form-control" placeholder="Chiave">
          <div class="input-group-append">
            <button class="btn btn-outline-light" type="submit">Vai</button>
          </div>
        </div>
      </form>
    </div>
  `);
}

socket.on(`status_${key}`, function(message){
  $(`#masters`).text(`Masters in game: ${message.masters}`);
  $(`#players`).text(`Players in game: ${message.players}`);
});

function main(st) {
  showed_cards = [];
  for (var k = 0; k < 25; k++) {showed_cards[k] = false;}
  status = st; // master | player
  gen_cards(); // Dato il seed "chiave" tutti sono sincronizzati

  $("#start").hide(); // Per cancellare i bottoni di base

  $("#center").append(`
    <div class="row justify-content-center">

      <div class="card bg-primary text-center col-3 m-1 px-1" id="blue">
        <div class="card-body p-0">
          <h5 class="card-text font-weight-bold">
            <div>Team blu: </div>
            <div id="point"></div>
          </h5>
        </div>
      </div>

      <div class="card bg-light text-center col-3 m-1 px-1" id="white">
        <div class="card-body p-0">
          <h5 class="card-text font-weight-bold">
            <div>Carte bianche: </div>
            <div id="point"></div>
          </h5>
        </div>
      </div>

      <div class="card bg-danger text-center col-3 m-1 px-1" id="red">
        <div class="card-body p-0">
          <h5 class="card-text font-weight-bold">
            <div>Team rosso: </div>
            <div id="point"></div>
          </h5>
        </div>
      </div>

    </div>
  `);

  reset_counter();

  for (var i = 0; i < 25; i++) { // Genera le 25 carte
    if (i%5 == 0) $("#center").append(`<div class="row justify-content-center">`);
    if (status == "player") { // Stile per la vista giocatore
      $(".row:last").append(`
        <div class="card bg-secondary text-center col-2 m-1 px-1" id="${i}" style="border-width: 2px;">
          <div class="card-body px-1">
            <h3 class="card-text font-weight-bold">${cards[i]}</h3>
          </div>
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
    reset_counter();
    status = "master";
    for (var h = 0; h < 25; h++) showed_cards[h] = false;

    socket.emit('be_master', {});
    $("#center").append(`<h2 class="text-light mt-3 mb-0 font-weight-bold" style="text-align:left;float:left;">Master View</h2>`);
  } else {
    socket.emit('get_update', {});
    $("#center").append(`<h2 class="text-light mt-3 mb-0 font-weight-bold" style="text-align:left;float:left;">Player View</h2>`);
  }
  $("#center").append(`<h2 class="text-light mt-3 mb-0 ml-4 font-weight-bold" style="text-align:right;float:right;" id="players">Players in game: 0</h2> <h2 class="text-light mt-3 mb-0 font-weight-bold" style="text-align:right;float:right;" id="masters">Masters in game: 0</h2>`);
}

function _flipCard(id){
  if (status == "master") {
    console.log('flip');

    var tmp = showed_cards[id];
    showed_cards[id] = true;

    console.log(showed_cards);

    socket.emit('flip_card', {'key': key, 'id_flip': id, 'state': showed_cards});
    showed_cards[id] = tmp;
  }
}

socket.on(`flip_card_${key}`, function(message){
  console.log("change state recived");
  console.log(message);
  for (var i = 0; i < 25; i++) if (message.state[i] == true) flipCard(i);
});

function flipCard(id){
  if (showed_cards[id]==false){
    showed_cards[id]=true;

    if (color[id] == 'red') point.red ++;
    else if (color[id] == 'blue') point.blue ++;
    else if (color[id] == 'white') point.white ++;

    if (status == 'master') {
      $(`#${id} #title`).text("Showed");
      $(`#${id}`).addClass("bg-secondary");
      switch (color[id]) {
        case "blue":
          $(`#${id}`).removeClass("bg-primary");
          $(`#${id}`).addClass("border-primary");
          break;
        case "red":
          $(`#${id}`).removeClass("bg-danger");
          $(`#${id}`).addClass("border-danger");
          break;
        case "white":
          $(`#${id}`).removeClass("bg-light");
          $(`#${id}`).addClass("border-light");
          break;
      }
    }
    else { // Caso in cui sei un player
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
          $(`#${id}`).removeClass("text-dark");
          $(`#${id}`).addClass("text-white");
          $(`#${id}`).addClass("bg-dark");
          $(`#${id}`).addClass("border-white");
          break;
      }
    }

    $(`#blue #point`).text(`${point.blue}/8`);
    $(`#white #point`).text(`${point.white}/7`);
    $(`#red #point`).text(`${point.red}/9`);
  }
}

function reset_counter(){
  point = {
    red: 0,
    blue: 0,
    white: 0
  };

  $(`#blue #point`).text(`${point.blue}/8`);
  $(`#white #point`).text(`${point.white}/7`);
  $(`#red #point`).text(`${point.red}/9`);
}
