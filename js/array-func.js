/*

duodamas skaiciu masyvas -> rasti vidurki
duodamas skaiciu masyvas -> rasti didziausia skaiciu
duodamas skaiciu masyvas -> rasti maziausia skaiciu

*/

const numbers1 = [2, 6, 50, 14, 67, 3, 7, 23, 100, 1];
const numbers2 = [1, 2, 3];

function avarage(numbers) {
    let sum = 0;
    const count = numbers.length;
    for (let i = 0; i < count; i++) {
        sum += numbers[i];
    }
    const numAvarage = sum / count;
    return `[${numbers}] avarage is ${numAvarage}`;
}

console.log(avarage(numbers1));
console.log(avarage(numbers2));

console.log('-----------------');

function largestNum(numbers) {
    let largest = numbers[0];
    const count = numbers.length
    for (let i = 0; i < count; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }
    return `from array [${numbers}] the largest number is ${largest}`;
}

console.log(largestNum(numbers1));

console.log('-----------------');

function smallestNum(numbers) {
    let smallest = numbers[0];
    const count = numbers.length
    for (let i = 0; i < count; i++) {
        if (numbers[i] < smallest) {
            smallest = numbers[i];
        }
    }
    return `from array [${numbers}] the smallest number is ${smallest}`;
}

console.log(smallestNum(numbers1));

console.log('-----------------');

/*

duodamas tekstas -> rasti kiek kartu yra panaudota ieskoma raide

*/

const txt1 = 'Kaip grazu kai saule sviecia sia grazia diena';
const txt2 = 'as noriu valgyti';
const letter1 = 's';
const letter2 = 'a';

function countUsedLetter(txt, letter) {
    let letterCount = 0;
    let count = txt.length;
    for (let i = 0; i < count; i++) {
        if (txt[i] === letter) {
            letterCount++;
        }
    }
    return `in the given text letter '${letter}' is used ${letterCount} times`;
}

console.log(countUsedLetter(txt1, letter1));
console.log(countUsedLetter(txt2, letter2));

console.log('-----------------');

/*

duodamas tekstas -> sudaryti masyva, kuriame yra santrauka kiek ir kokios raides yra panaudotos

1) kokia yra raide[0];
2) raides[0] count yra 0;
3) ar raide[0] pasikartoja masyve;
4) jei pasikartoja prideti raides[0] count;

1) kokia yra raide[1];
2) raides[1] count yra 0;
3) ar raide[1] pasikartoja masyve;
4) jei pasikartoja prideti raides[1] count;

*/

const txt3 = 'as turiu du batus'; // [a:2, s:2,  :3, t:2, u:4, r:1, i:1, d:1, b:1]
const txt4 = 'baba';

function letterStatistics(txt) {
    let lettersUsed = [];
    let count = txt.length;
    for (let x = 0; x < count; x++) {
        lettersUsed[x] = countMyLetter(txt, txt[x]);
    }
    return lettersUsed;
}

console.log(letterStatistics(txt3));

function countMyLetter(txt, myLetter) {
    let timesFound = 0;
    let count = txt.length;
    for (let i = 0; i < count; i++) {
        if (txt[i] === myLetter) {
            timesFound++
        }
    }
    return `${timesFound}->${myLetter}`;
}

