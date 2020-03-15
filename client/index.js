var socket = io.connect('http://localhost');
/*
socket.on('message', function(message) {
  alert('Il server dice: ' + message);
});
*/

var showed_cards;
var status;

function main(st) {
  showed_cards = [];
  for (var i = 0; i < 25; i++) {showed_cards[i] = false;}
  status = st;
  gen_cards();
  $("#start").hide();
  for (var i = 0; i < 25; i++) {
    if (i%5 == 0) $("#center").append(`<div class="row justify-content-center">`);
    if (status == "player") {
      $(".row:last").append(`
        <div class="card bg-secondary text-center col-2 m-1" id="${i}" style="border-width: 2px;">
          <a href="javascript:_flipCard(${i})" style="text-decoration:none;" class="text-dark" id="card">
            <div class="card-body">
              <h3 class="card-text font-weight-bold">${cards[i]}</h3>
              </div>
          </a>
        </div>
      `);
    }
    else {
      $(".row:last").append(`
        <div class="card bg-secondary text-center col-2 m-1" id="${i}" style="border-width: 2px;">
          <a href="javascript:_flipCard(${i})" style="text-decoration:none;" class="text-dark" id="card">
            <div class="card-title">
              <p id ="title">Not showed</p>
            </div>
            <div class="card-body">
              <h3 class="card-text font-weight-bold">${cards[i]}</h3>
            </div>
          </a>
        </div>
      `);
    }
  }
  if (status == "master") {
    for (var j = 0; j < 25; j++) {flipCard(j);}
    $("#center").append(`<h1 class="text-light mt-5">MASTER VIEW</h1>`);
  }
}

function _flipCard(id){
  if (status == "master") {
    console.log('flip');
    $(`#${id} #title`).text("Showed");
    socket.emit('flip_card', {'id': id});
  }
}

socket.on('flip_card', function(message){
  console.log("message recived");
  flipCard(message.id);
});

function flipCard(id){
  if (showed_cards[id]==false){
    showed_cards[id]=true;
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

function add_word(id){
  var text = document.getElementById("input-"+id).value
  $(`#${id} h5`).append(text);
}

Math.seedrandom('any string you like');
function parity(){

  console.log(Math.random());
}
