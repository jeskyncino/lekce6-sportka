// SPORTKA

let osudi = [];
let vyherniCisla = document.querySelector('#vyherni-cisla');
let tazenaCisla = [];
let textHistorie = document.querySelector('#historie__text');


//naplním osudí
for (let i = 1; i <= 49; i += 1) {
    osudi.push(i);
}

function losuj() {

        //vložím je do historie

        for (let i = 0; i < tazenaCisla.length; i++) {
            textHistorie.innerHTML += tazenaCisla[i] + ', ';
        }
    
        textHistorie.innerHTML += '<br>'


    // vrátím čísla do osudí
    while (tazenaCisla.length > 0) {
        osudi.push(tazenaCisla[0]);
        tazenaCisla.splice(0, 1);
    }

    //zobrazím losovací pole

    document.querySelector('.obsah').style.display = 'block';

    // z osudi vyberu 7 náhodných čísel

    for (let i = 0; i < 7; i++) {
        let vyherniIndex = Math.floor(Math.random() * osudi.length);
        let vyherniCislo = osudi[vyherniIndex];

        tazenaCisla.push(vyherniCislo);
        osudi.splice(vyherniIndex, 1);
    }

    //vyčistím losovací pole

    vyherniCisla.innerHTML = "";


    //vypíšu losovaná čísla do HTML

    for (let i = 0; i < tazenaCisla.length; i++) {

       setTimeout(function(){vyherniCisla.innerHTML += '<span class="cislo">' + tazenaCisla[i] + '</span>';}, i * 3000)

    }


    document.querySelector('#losuj').textContent = "Znovu losovat"
    document.querySelector('#vymazHistorii').style.display = "inline-block"
    document.querySelector('.historie').style.display = "block"

}

function obnov() {
    textHistorie.innerHTML = "";
}

