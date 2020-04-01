var cards = ["Carro Armato", "Zucchero", "Satellite", "Pecora", "Baffo", "Vite", "Missile", "Squalo", "Alpi", "Occhio", "Laser", "Pechino", "Colpo", "Bacino", "Scampo", "Messico", "Metro", "Volo", "Lupo", "Polo", "Rospo", "Borsa", "Rivoluzione", "Viaggio", "Batteria", "Miele", "Patata", "Capo", "Banca", "Guerra", "Centro", "Pasta", "Coniglio", "Aria", "Leone", "Vento", "Infermiera", "Cintura", "Chiesa", "Dottore", "Pesce", "Luna", "Balena", "Fuoco", "Ponte", "Veleno", "Tavola", "Spaghetto", "Drago", "Corso", "Anello", "Calcio", "Tasso", "Campana", "Piovra", "Elicottero", "Sedia", "Contrabbandiere", "Napoli", "Piano", "Fantasma", "Rombo", "Dante", "Cavallo", "Squadra", "Corona", "Croce", "Capelli", "Rete", "Piastrina", "Piega", "Sangue", "Profumo", "Allargare", "Alcol", "Sauna", "Prugna", "Altalena", "Africa", "Postumi", "Pugno", "Picche", "Amante", "Concime", "Pelle", "Piede", "Animale", "Prendere", "Verga", "Pistone", "Antro", "Segretaria", "Hollywood", "Parco", "Patria", "Ramo", "Partita", "Terra", "Coppa", "Grecia", "Roma", "Coperta", "Limousine", "Nave", "Coltello", "Cotone", "Limone", "Pilota", "Teatro", "Banda", "Battuta", "Pollice", "Polizia", "Isola", "Schermo", "Opera", "Rimozione", "Brevetto", "Tampone", "Zattera", "Kiwi", "Spada", "Faluto", "Assassino", "Cimice", "Cornice", "Porto", "Energia", "Radio", "Vuoto", "Uovo", "Albero", "Tesoro", "Bottone", "Ombelico", "Pipa", "Elefante", "Piastra", "Resistenza", "Bar", "Freddo", "Film", "Topo", "Treno", "Roulette", "Profilo", "Smorzare", "Costume", "Schiaffo", "Chiuso", "Facile", "Squittire", "Corna", "Vasca", "Carriola", "Buco", "Urlare", "Tortura", "Nero", "Noci", "Nonna", "Notte", "Morbido", "Nano", "Ancora", "Milf", "Montagna", "Manette", "Mare", "Maschera", "Matita", "Lingua", "Lubrificante", "Lungo", "Macchina", "Goldone", "Lesbica", "Doccia", "Laccio", "Guardare", "Gruppo", "Mamma", "Indice", "Pepe", "Messaggio", "Latte", "Morso", "Hotel", "Orologio", "Sorgente", "Prato", "Spezia", "Merlo", "Calza", "Provincia", "Regione", "Volume", "Cuneo", "Sacrificio", "Trapano", "Campione", "Documento", "Inganno", "Pulizia", "Cisterna", "Fermata", "Lente", "Invenzione", "Paradiso", "Purgatorio", "Religione", "Gufo", "Spalla", "Rifiuto", "Urgenza", "Estrazione", "Essenza", "Riduzione", "Puntura", "Cattedrale", "Soggiorno", "Marinaio", "Cerimonia", "Pagina", "Creatura", "Forno", "Legge", "Armadio", "Inferno", "Pozza", "Vapore", "Simbolo", "Foca", "Griglia", "Crema", "Rilassato", "Stress", "Samurai", "Sconfitta", "Marsala", "Flagello", "Perdono", "Arredamento", "Suino", "Gemma", "Fianco", "Tombino", "Podio", "Medaglia", "Brindisi", "Parentela", "Idea", "Galera", "Manica", "Carro", "Adesivo", "Serratura", "Supporto", "Esorcismo", "Pazienza", "Tessuto", "Vanga", "Polenta", "Poltiglia", "Procreazione", "Naso", "Tana", "Criceto", "Aratro", "Sale", "Timone", "Camera", "Proverbio", "Verruca", "Sbarra", "Orecchio", "Fiducia", "Bagaglio", "Cilindro", "Bombetta", "Pala", "Maniscalco", "Iniezione", "Scorta", "Mentore", "Cicerone", "Mecenate", "Narciso", "Casanova", "Ercole", "Cesare", "Napoleone", "Gerusalemme", "Torino", "Sosia", "Cristo", "Cleopatra", "Augusto", "Novità", "Fronte", "Clessidra", "Domanda", "Firenze", "Finale", "Settore", "Copia", "Risposta", "Decisione", "Fascia", "Pubblicità", "Molo", "Situazione", "Camicia", "Ghiaia", "Cestino", "Vendetta", "Turbante", "Occhiello", "Quaglia", "Disagio", "Icona", "Pinta", "Sportello", "Silicone", "Uragano", "Miracolo", "Pasticcio", "Prete", "Ripresa", "Dolore", "Vitamina", "Materasso", "Fattoria", "Mulino", "Conclave", "Tributo", "Profezia", "Dattero", "Oasi", "Cascata", "Magma", "Pellegrino", "Ricetta", "Promontorio", "Rugiada", "Ciotola", "Alabarda", "Graffio", "Girandola", "Carbone", "Fossile", "Tifo", "Peste", "Trampolino", "Riflesso", "Fiocina", "Scivolo", "Lontra", "Calcolo", "Aperitivo", "Contratto", "Stipendio", "Superficie", "Conchiglia", "Turista", "Multa", "Salvagente", "Impresa", "Traguardo", "Incendio", "Violino", "Promozione", "Sosta", "Approssimazione", "Semaforo", "Scudo", "Impero", "Preventivo", "Totale", "Topazio", "Diga", "Inquinamento", "Runa", "Arrivo", "Bambino", "Prestigio", "Balsamo", "Pelliccia", "Branda", "Finestra", "Risvolto", "Cricca", "Grimaldello", "Oste", "Orpello", "Polpa", "Dilatazione", "Purea", "Torrone", "Miscela", "Stalattite", "Fulcro", "Fronda", "Vichingo", "Toga", "Esplosione", "Provolone", "Organo", "Quadro", "Arco", "Spazio", "Maiale", "Carica", "Gas", "Figura", "Massa", "Errore", "Tiro", "Fiera", "Fetta", "Triangolo", "Mercurio", "Yeti", "Tazza", "Gru", "Spirito", "Riga", "Magia", "Manto", "Flauto", "Amo", "Colombo", "Caffè", "Pranzo", "Marmo", "Foro", "Porta", "New York", "Guardia", "Mutande", "Posizione", "Scheda", "Asse", "Tubo", "Diavolo", "Disco", "Calice", "Catena", "Seno", "Chiodo", "Natale", "Anno", "Mossa", "Fila", "Salsa", "Parte", "Nota", "Pera", "Area", "Suono", "Giro", "Cassa", "Aereo", "Petto", "Dente", "Forchetta", "Re", "Tempo", "Casa", "Scarpa", "Vetro", "Bottiglia", "Ghiaccio", "Cane", "Regina", "Giorno", "Oro", "Insegnante", "Italia", "Atlantide", "America", "Stato", "Germania", "Pinocchio", "Ninja", "Himalaya", "Svizzera", "Mosca", "Zucca", "Londra", "Egitto", "Tokyo", "Bermuda", "Australia", "Campo", "Canna", "Cerchio", "Codice", "Braccio", "Flusso", "Testa", "Chiave", "Motore", "Onda", "Forza", "Piatto", "Passo", "Punto", "Diamante", "Cravatta", "Lettera", "Torre", "Muro", "Letto", "Mano", "Etichetta", "Bocca", "Posta", "Base", "Torcia", "Banco", "Cambio", "Linea", "Ago", "Canale", "Blocco", "Cuore", "Corno", "Stella", "Corda", "Piramide", "Soldato", "Avorio", "Neve"];

var color = ["red", "red", "red", "red", "red", "red", "red", "red", "red", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "black", "white", "white", "white", "white", "white", "white", "white"];

function gen_cards(){
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
