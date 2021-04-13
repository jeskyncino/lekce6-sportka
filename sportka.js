// SPORTKA

let osudi = [];
let vyherniCisla = document.querySelector('#vyherni-cisla');
let tazenaCisla = [];

//naplním osudí
for (let i = 1; i <= 49; i = i + 1) {
    osudi.push(i);
}

// z osudi vyberu 7 náhodných čísel
vyherniCisla.text = "";
for (let i = 0; i < 7; i++) {
    let vyherniIndex = Math.floor(Math.random() * osudi.length);
    let vyherniCislo = osudi[vyherniIndex];

    tazenaCisla.push(vyherniCislo);
    osudi.splice(vyherniIndex, 1);
}

//vypíšu do HTML
for (let i = 0; i < tazenaCisla.length; i++) {
    vyherniCisla.innerHTML += '<span class="cislo">' +  tazenaCisla[i] + '</span>';
}


function losuj() {
  
    
}