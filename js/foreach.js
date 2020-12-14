/*
metodas
forEach -> per kiekviena
*/

const skaiciai = [1, 2, 3, 4, 5, 6];

/*console.log(skaiciai);

for (let i = 0; i < skaiciai.length; i++) {
    const skaicius = skaiciai[i];
    console.log(skaicius * skaicius);
}

console.log('--------------');

function kvadratu(x) {
    const rez = x * x;
    console.log(rez)
    return rez;
}

skaiciai.forEach(kvadratu);

console.log('----foreach-function---------');

skaiciai.forEach(function (p) {
    const kvd = p * p;
    console.log(kvd);
    return kvd;
});
*/

console.log('-----foreach-arrow-------');


const kvd = skaiciai.forEach(p => console.log(p * p));


/*
function squareSum(numbers) {
    let numbersSqr = numbers.forEach();
    console.log(numbersSqr);
}

console.log(squareSum([1, 2]));
*/