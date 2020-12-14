// iprastine funkcijos deklaracija
function sum(a, b) {
    return a + b;
}

console.log(sum(8, 9));

console.log('------------');

// kintamajam priskirta anonimine funkcija
const atimtis = function(a, b) {
    return a - b;
}

console.log(atimtis(10, 5));

console.log('------------');

// arrow function (liet. rodykline funkcija)
const dalyba = (a, b) => {
    return a / b;
}

console.log(dalyba(21, 7));

console.log('------------');

// arrow function - jei logika sudaryta tik is vienos proceduros, galima nerasyti {} ir return
const daugyba = (a, b) => a * b;

console.log(daugyba(21, 7));

console.log('------------');

// arrow function - jei yra tik vienas gaunamas parametras, galima nerasyti ()

const kvadratu = a => a * a;

console.log(kvadratu(10));

console.log('------------');