const pajamos = [100, 200, 300, 100, 100, 0, 100];
let menuo = 0;
let pinigine = 0;

/* pinigine += pajamos[menuo++];
console.log(pinigine);

pinigine += pajamos[menuo++];
console.log(pinigine);

pinigine += pajamos[menuo++];
console.log(pinigine);

pinigine += pajamos[menuo++];
console.log(pinigine);

pinigine += pajamos[menuo++];
console.log(pinigine);

pinigine += pajamos[menuo++];
console.log(pinigine);

pinigine += pajamos[menuo++];
console.log(pinigine); */

console.log('----------------------');

for (let i = 0; i < 5; i++) {
    console.log('Siuo metu i yra', i);
}


for (menuo = 0; menuo < pajamos.length; menuo++) {
    pinigine += pajamos[menuo]
    console.log(pinigine);
}



/*
suskaiciuoti pazymiu vidurki
*/

const marks = [10, 2, 8, 4, 6, 3, 9, 10, 1];
let sum = 0;

for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
}

const count = marks.length;
const avarage = sum / count;

console.log(`Pazymiu vidurkis yra ${avarage}.`);

console.log('------------------------')


const text = 'Labas!';
let backward = '';

for (let i = text.length - 1; i >= 0; i--) {
    const letter = text[i];
    backward += text[i];

    console.log(i, letter, backward);
}

console.log(text, '<--->', backward);



/* for (let i = 0; i < text.length; i++) {
    const letter = text[i];
    backward = letter + backward;
} */