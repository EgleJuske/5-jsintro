// Primityvios reiksmes
// Primitive types

let a = 5;
let b = 100;

console.log(a);
console.log(b);

console.log('-------------');

b = a;

console.log(a);
console.log(b);

console.log('-------------');

a = 88;

console.log(a);
console.log(b);

console.log('-------------');

// Kompleksines reiksmes
// Reference types

const listA = [11, 22];
let listB = [800, 900];

console.log(listA);
console.log(listB);

listB = listA;

console.log(listA);
console.log(listB);

console.log('-------------');

listA[0] = 2; //jei tai yra konstanta, saraso reiksmes gali buti keiciamos

console.log(listA);
console.log(listB);

console.log('-------------');

listB = [3, 6, 7];

console.log(listA);
console.log(listB);