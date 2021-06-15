// 2. Crea un array di 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

//1) creo un array di 10 oggetti
var zucchine = [
    {
        varieta: 'a',
        weigth: 0,
        length: 0,
    },
    {
        varieta: 'b',
        weigth: 0,
        length: 0,
    },
    {
        varieta: 'c',
        weigth: 0,
        length: 0,
    },
    {
        varieta: 'd',
        weigth: 0,
        length: 0,
    },
    {
        varieta: 'e',
        weigth: 0,
        length: 0,
    },
    {
        varieta: 'f',
        weigth: 0,
        length: 0,
    },
    {
        varieta: 'g',
        weigth: 0,
        length: 0,
    },
    {
        varieta: 'h',
        weigth: 0,
        length: 0,
    },
    {
        varieta: 'i',
        weigth: 0,
        length: 0,
    },
    {
        varieta: 'j',
        weigth: 0,
        length: 0,
    },
];

for(var i = 0; i < zucchine.length; i++){
    zucchine[i].weigth = generateWeigth(1,5);
    zucchine[i].length = generateLength(5,20);
}

console.log(zucchine);

//2) calcolo il totale del peso
var totWeigth = 0;

for(var i = 0; i < zucchine.length; i++){
    totWeigth += zucchine[i].weigth
}

console.log(totWeigth);
//** functions */
//1b) creo due funzioni per creare randomicamente il peso e la lunghezza delle zucchine
function generateWeigth(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
function generateLength(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }