// SPORTKA

let osudi = [];
let vyherniCisla = document.querySelector('#vyherni-cisla');
let tazenaCisla = [];
let textHistorie = document.querySelector('#historie__text');

console.log(vyherniCisla);
console.log(textHistorie);


//naplním osudí
for (let i = 1; i <= 49; i += 1) {
    osudi.push(i);
}

function losuj() {
       
        //zobrazím losovací pole

        let obsah = document.querySelector('.obsah').style.display = "block"

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

            vyherniCisla.innerHTML += '<span class="cislo">' + tazenaCisla[i] + '</span>';
        }
    
        //vložím je do historie
        
        for (let i = 0; i < tazenaCisla.length; i++) {
            textHistorie.innerHTML +=  tazenaCisla[i] + ', ';
        }

        textHistorie.innerHTML += '<br>'


        
        // vrátím čísla do osudí
        while (tazenaCisla.length > 0) {
            osudi.push(tazenaCisla[0]);
            tazenaCisla.splice(0, 1);
        }

        let button = document.querySelector('#losuj').textContent = "Znovu losovat"
        let historie = document.querySelector('.historie').style.display = "block"
        let vymazHistorii = document.querySelector('#vymazHistorii').style.display = "inline-block"

    }

    function obnov() {
        textHistorie.innerHTML="";
    }