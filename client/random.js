var cards = ["Carro Armato", "Zucchero", "Satellite", "Pecora", "Baffo", "Vite", "Missile", "Squalo", "Alpi", "Occhio", "Laser", "Pechino", "Colpo", "Bacino", "Scampo", "Messico", "Metro", "Volo", "Lupo", "Polo", "Rospo", "Borsa", "Rivoluzione", "Viaggio", "Batteria", "Miele", "Patata", "Capo", "Banca", "Guerra", "Centro", "Pasta", "Coniglio", "Aria", "Leone", "Vento", "Infermiera", "Cintura", "Chiesa", "Dottore", "Pesce", "Luna", "Balena", "Fuoco", "Ponte", "Veleno", "Tavola", "Spaghetto", "Drago", "Corso", "Anello", "Calcio", "Tasso", "Campana", "Piovra", "Elicottero", "Sedia", "Contrabbandiere", "Napoli", "Piano", "Fantasma", "Rombo", "Dante", "Cavallo", "Squadra", "Corona", "Croce", "Capelli", "Rete", "Piastrina", "Piega", "Sangue", "Profumo", "Allargare", "Alcol", "Sauna", "Prugna", "Altalena", "Africa", "Postumi", "Pugno", "Picche", "Amante", "Concime", "Pelle", "Piede", "Animale", "Prendere", "Verga", "Pistone", "Antro", "Segretaria", "Hollywood", "Parco", "Patria", "Ramo", "Partita", "Terra", "Coppa", "Grecia", "Roma", "Coperta", "Limousine", "Nave", "Coltello", "Cotone", "Limone", "Pilota", "Teatro", "Banda", "Battuta", "Pollice", "Polizia", "Isola", "Schermo", "Opera", "Rimozione", "Brevetto", "Tampone", "Zattera", "Kiwi", "Spada", "Faluto", "Assassino", "Cimice", "Cornice", "Porto", "Energia", "Radio", "Vuoto", "Uovo", "Albero", "Tesoro", "Bottone", "Ombelico", "Pipa", "Elefante", "Piastra", "Resistenza", "Bar", "Freddo", "Film", "Topo", "Treno", "Roulette", "Profilo", "Smorzare", "Costume", "Schiaffo", "Chiuso", "Scopare", "Facile", "Squittire", "Corna", "Vasca", "Carriola", "Buco", "Urlare", "Tortura", "Nero", "Noci", "Nonna", "Notte", "Morbido", "Nano", "Ancora", "Milf", "Montagna", "Manette", "Mare", "Maschera", "Matita", "Lingua", "Lubrificante", "Lungo", "Macchina", "Goldone", "Lesbica", "Doccia", "Laccio", "Guardare", "Gruppo", "Mamma", "Indice", "Pepe", "Messagio", "Latte", "Morso", "Hotel"];

var color = ["red", "red", "red", "red", "red", "red", "red", "red", "red", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "black", "white", "white", "white", "white", "white", "white", "white"];

function gen_cards(){
  /*
  $.urlParam = function(name){
      var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
      if (results==null){
         return null;
      }
      else{
         return results[1] || 0;
      }
  };

  var x = $.urlParam("chiave");
  */
  var x = key;

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
