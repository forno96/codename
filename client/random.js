var cards = ["Saab", "Volvo", "BMW", "Volvo", "BMW", "Volvo", "BMW", "Volvo", "BMW", "Volvo", "BMW", "Volvo", "BMW", "Volvo", "BMW", "Volvo", "BMW", "Volvo", "BMW", "Volvo", "BMW", "Volvo", "BMW", "Volvo", "BMW", "Volvo", "BMW", "Volvo", "BMW"];

var color = ["red", "red", "red", "red", "red", "red", "red", "red", "red", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "black", "white", "white", "white", "white", "white", "white", "white"]

function gen_cards(){
  $.urlParam = function(name){
      var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
      if (results==null){
         return null;
      }
      else{
         return results[1] || 0;
      }
  }

  var x = $.urlParam("chiave");
  var y = $.urlParam("ruolo");

  Math.seedrandom(x);

  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }


  shuffle(cards);
  shuffle(color);
}



/*
$(function(){
    $(".cell").each(function(){
       $(this).text(cards.pop());
       $(this).css("background-color","grey");
       if (y == "capo") $(this).css("color",color.pop());
    });
    $(".cell").click(function(){
    if ($(this).css("background-color") == "rgb(128, 128, 128)") $(this).css("background-color", "red");
    else if ($(this).css("background-color") == "rgb(255, 0, 0)") $(this).css("background-color", "blue");
    else if ($(this).css("background-color") == "rgb(0, 0, 255)") $(this).css("background-color", "white");
    else if ($(this).css("background-color") == "rgb(255, 255, 255)") $(this).css("background-color", "grey");
});
});
*/
