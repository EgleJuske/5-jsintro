/*
while() {}
proceduros atliekamos tol - kol tenkinama salyga/-os
*/

let i = 0;

while (i < 5) {
    console.log('labas');
    i++;
}


for (let m = 0; m < 5; m++) {
    console.log('rytas');
}

/*
sumuoti atsitiktini skaiciu tol kol gausim suma 10
*/

let randomSum = 0;
let randCount = 0;

while (randomSum < 10) {
    randCount++;
    randomSum += Math.random();
    console.log(randCount, '-', randomSum);
}


let randomSumFor = 0;
let randCountFor = 0;

for (; randomSumFor < 10; randomSumFor += Math.random()) {
    randCountFor++;
    console.log(randCountFor, '-', randomSumFor);
}