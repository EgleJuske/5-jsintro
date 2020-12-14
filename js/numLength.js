function hasDot(text) {
    for (let i = 0; i < text.length; i++) {
        const letter = text[i];
        if (letter === '.') {
            return true;
        }
    }
    return false;
}

function numLength(num) {
    if (typeof num !== 'number') {
        return 'ERROR: duotas ne skaicius';
    }
    if (isNaN(num)) {
        return 'ERROR: duotas ne skaicius (NaN)';
    }
    if (!isFinite(num)) {
        return 'ERROR: skaicius turi buti tikrais (ne Infinity)';
    }
    let length = 0;
    const textNumber = '' + num;
    length = textNumber.length;

    if (hasDot(textNumber)) {
        length--;
    }
    //arba galima if (num % 1 !== 0) {length--;}

    if (textNumber[0] === '-') {
        length--;
    }
    // arba if (num < 0) {length--;}

    return length;
}


console.log(numLength(true));
console.log(numLength('asd'));
console.log(numLength(NaN));
console.log(numLength(undefined));
console.log(numLength());
console.log(numLength(numLength));
console.log(numLength([5]));
console.log(numLength([5, 5]));
console.log(numLength([5, 5, 9, 8]));
console.log(numLength(['5']));
console.log(numLength(['5', '5']));
console.log(numLength(['5', '5', '9', '8']));
console.log(numLength(['asd']));
console.log(numLength(['asd', 'asd']));
console.log(numLength(['asd', 'asd', 'asd', 'asd']));
console.log(numLength(-Infinity));
console.log(numLength(Infinity));

console.log('-----------------');

console.log(numLength(5), '->', 1);
console.log(numLength(781), '->', 3);
console.log(numLength(37060123456), '->', 11);
console.log(numLength(37060123456), '->', 11);
console.log(numLength(3 + 6), '->', 1);
console.log(numLength(3.1415), '->', 5);
console.log(numLength(-6666), '->', 4);
console.log(numLength(-6.666), '->', 4);
console.log(numLength(100000000000000000000000000000000000000000000), '->', 45); //daugiau 21 neatvaizduoja, nes skaicius tampa 1e+44
console.log(numLength(100000000000000000000), '->', 21);
console.log(numLength(1_000), '->', 4);