var cards = ["zucchero", "Satellite", "Pecora", "Baffo", "Vite", "Missile", "Squalo", "Alpi", "Occhio", "Kiwi", "Laser", "Pechino", "Colpo", "Bacino", "Scampo", "Messico", "Metro", "Volo", "Lupo", "Polo", "Rospo", "Borsa", "Rivoluzione", "Viaggio", "Batteria", "Miele", "Patata", "Capo", "Banca", "Guerra", "Drago", "Centro", "Pasta", "Coniglio", "Aria", "Leone", "Vento", "Infermiera", "Cintura", "Chiesa", "Dottore", "Pesce", "Luna", "Balena", "Fuoco", "Ponte", "Veleno", "Tavola"];

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

function checkArray(){
  for (var i= 0; i < cards.length; i++){
    for(var j = i+1; j < cards.length; j++){
      if(cards[i]==cards[j]) console.log(cards[i]);
    }
  }
}
