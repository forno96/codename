var socket = io.connect('http://localhost');
/*
socket.on('message', function(message) {
  alert('Il server dice: ' + message);
});
*/

var showed = [];
for (var i = 0; i < 25; i++) {showed[i] = false;}

function main(st) {
  status = st;
  $("#start").hide();
  for (var i = 0; i < 25; i++) {
    if (i%5 == 0) $("#center").append(`<div class="row justify-content-center">`);
    //for (var j = 0; j < 5; j++) {
      $(".row:last").append(`
        <div class="card bg-secondary text-center col-2 m-1" id="${i}" style="border-width: 2px;">
          <a href="javascript:_flipCard(${i})" style="text-decoration:none;" class="text-dark" id="card">
            <div class="card-body">
              <h5 class="card-text font-weight-bold">ANDORRE</h5>
            </div>
          </a>
        </div>
      `);
    //}
  }
}

function _flipCard(id){
  if (status == "master") {
    console.log('flip')
    flipCard(id);
    socket.emit('flip_card', {'id': id});
  }
}

socket.on('flip_card', function(message){
  console.log("message recived");
  flipCard(message.id);
});

function flipCard(id){
  if (showed[id]==false){
    showed[id]=true;
    $(`#${id}`).removeClass("bg-secondary");

    switch (id%4) {
      case 0:
        $(`#${id}`).addClass("bg-primary");
        break;
      case 1:
        $(`#${id}`).addClass("bg-danger");
        break;
      case 2:
        $(`#${id}`).addClass("bg-light");
        break;
      default:
        $(`#${id} a`).removeClass("text-dark");
        $(`#${id} a`).addClass("text-white");
        $(`#${id}`).addClass("bg-dark");
        $(`#${id}`).addClass("border-white");
    }
  }
}

function add_word(id){
  var text = document.getElementById("input-"+id).value
  $(`#${id} h5`).append(text);
}
