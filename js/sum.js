/*
Suskaiciuoti skaiciu suma intervale (imtinai)
*/

// [1..4] = 10
// [2..5] = 14
// [1..10] = 55

const nuo = 2;
const iki = 5;
let suma = 0;

for (let i = nuo; i <= iki; i++) {
    suma += i;
    console.log(i, '=>', suma);
}

