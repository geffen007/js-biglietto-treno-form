// dichiariamo le variabili collegate ai bottoni
var genera = document.getElementById('genera');
var annulla = document.getElementById('annulla');

// sviluppiamo la funzione dal click su genera
genera.addEventListener("click", function() {
    // variabili di input
    var nomeCognome = document.getElementById("nome-cognome").value;
    var km = document.getElementById('km').value;
    var eta = document.getElementById('eta').value;

    // partiamo con le cose semplici, stampiamo le variabili che non hanno bisogno di operazioni
    document.getElementById('nome-pass').innerHTML=nomeCognome;
    document.getElementById('vagone').innerHTML = Math.floor(Math.random()*9)+1;
    document.getElementById('cp').innerHTML = Math.floor(Math.random()*9999)+90000;

    // iniziamo a calcolare
    var offerta = "nessuno Sconto"
    var costoTot = km * 0.21;
    if (eta == 0) {
    costoTot -= (costoTot / 100 * 20);
    offerta = "sconto del 20%"
    }else if (eta == 2 ) {
    costoTot -= (costoTot / 100 * 40);
    offerta = "sconto del 40%"
    }

    // stampiamo cosa abbiamo ricavato dall'operazione
    document.getElementById('price').innerHTML=costoTot.toFixed(2) + " €";
    document.getElementById('off-sel').innerHTML=offerta;

    // interagiamo sul css
    var biglietto = document.getElementById('ticket-out');
    biglietto.classList.remove("hidden");
    biglietto.classList.add("visible");
}
)

// sviluppiamo la funzione dal click su annulla
annulla.addEventListener("click", function() {
    // azzeriamo i campi nelle caselle di input
    var nomeCognome = document.getElementById("nome-cognome").value="";
    var km = document.getElementById('km').value="";
    var eta = document.getElementById('eta').value="";

    // interagiamo sul css
    var biglietto = document.getElementById('ticket-out');
    biglietto.classList.remove("visible");
    biglietto.classList.add("hidden");
}
)
