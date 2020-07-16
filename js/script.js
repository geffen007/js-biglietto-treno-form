




var genera = document.getElementById('genera');
var annulla = document.getElementById('annulla');


genera.addEventListener("click", function() {
    var nomeCognome = document.getElementById("nome-cognome").value;
    var km = document.getElementById('km').value;
    var eta = document.getElementById('eta').value;
    var offerta = "nessuno Sconto"
    document.getElementById('nome-pass').innerHTML=nomeCognome;
    document.getElementById('vagone').innerHTML = Math.floor(Math.random()*9)+1;
    document.getElementById('cp').innerHTML = Math.floor(Math.random()*10000)+90000; //non giusto
    var costoTot = km * 0.21;

    if (eta == 0) {
    costoTot -= (costoTot / 100 * 20);
    offerta = "sconto del 20%"
    }else if (eta == 2 ) {
    costoTot -= (costoTot / 100 * 40);
    offerta = "sconto del 40%"
    }

    console.log(costoTot);
    document.getElementById('price').innerHTML=costoTot;
    document.getElementById('off-sel').innerHTML=offerta;

}
)
