// 1. Creare un array di oggetti. Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

//1) creo l'array di oggetti
var bikes = [
    {
        name: 'mountain bike',
        weigth: 20
    },
    {
        name: 'fast bike',
        weigth: 10
    },
    {
        name: 'graziella',
        weigth: 15
    }
];

//2) attribuisco un valore peso minimo alla bici n° 1[0] dell'array
var weigthMin = bikes[0].weigth;

//3) utilizzo un ciclo for (che parte dal secondo oggetto [1] perchè il primo è quello che abbiamo attribuito alla variabile) per sostituire il peso minimo ogni volta che trova un oggetto di peso inferiore e dichiaro una variabile che abbia il valore uguale alla posizione dell'oggetto con weigth inferiore
for (var i = 1; i < bikes.length; i++){
    if(bikes[i].weigth < weigthMin){
        weigthMin = bikes[i].weigth;
        var objectPos = i;
    }
}

//4) stampo a schermo la bicicletta con il peso minore
var lighterBike = '';

for(var k in bikes[objectPos]){
    lighterBike += bikes[objectPos][k] + ' '
}

document.getElementById('lighter-bike').innerHTML = lighterBike;