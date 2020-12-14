function pickLetters(text, step) {
    // input validation
    if (typeof text !== 'string') {
        return 'ERROR: pirmas parametras turi buti tekstas.';
    }
    if (text === '') {
        return 'ERROR: pirmas parametras negali buti tuscias.';
    }
    if (typeof step !== 'number') {
        return 'ERROR: antrasis parametras turi buti skaicius.'
    }
    if (step > text.length) {
        return 'ERROR: nurodytas zingsnis negali virsyti teksto ilgio';
    }
    if (step == 0) {
        return 'ERROR: zingsnis negali buti 0 (nulis).'
    }
    //logic
    let word = '';
    for (let i = step - 1; i < text.length; i += step) {
        const letter = text[i];
        word += letter;
    }

    //post logic validation
    if (word === '') {
        return 'ERROR: nutiko kazkas keisto, nes negautas joks zodis.'
    }
    //return result
    return word;
}

console.log(pickLetters('abc', 0));
console.log(pickLetters('abc', 4));
console.log(pickLetters(1561, 2));
console.log(pickLetters('', 4));
console.log(pickLetters('abc', 'labas'));
console.log(pickLetters('abc', true));
console.log(pickLetters('abc', []));
console.log(pickLetters('abc', [5]));
console.log(pickLetters('abc', [5, 8]));
console.log(pickLetters('', 4));

console.log('-------------')

console.log(pickLetters('abcdefg', 2), '->', 'bdf');
console.log(pickLetters('abcdefghijkl', 3), '->', 'cfil');

console.log('-------------')

console.log(pickLetters('k s', 2));