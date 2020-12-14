function bigNum(numList) {
    //input validation
    if (!Array.isArray(numList)) {
        return 'ERROR: reikia pateikti array tipo verte su skaiciais.';
    }
    if (numList.length == 0) {
        return 'ERROR: reikia pateikti sarasa su bent vienu skaiciumi';
    }

    //logic
    let maxNumber = -Infinity;
    for (let num of numList) {
        if (typeof num !== 'number' || !isFinite(num)) {
            continue;
        }
        if (num > maxNumber) {
            maxNumber = num;
        }
    }

    //arba galima if (typeof num === 'number' && isFinite(num) && num > maxNumber) {maxNumber = num;}

    //post logic validation
    if (maxNumber == -Infinity) {
        return 'ERROR: sarase nera tikru skaiciu';
    }

    //return result
    return maxNumber;
}


console.log(bigNum('pomidoras'))
console.log(bigNum([]));
console.log(bigNum(NaN));
console.log(bigNum(true));
console.log(bigNum(false));
console.log(bigNum(NaN));
console.log(bigNum(undefined));
console.log(bigNum(null));
console.log(bigNum(['labas', 'rytas', 'tra', 'lia', 'lia']))
console.log(bigNum(['labas', 'rytas', Infinity, 'lia', 'lia']))
console.log(bigNum({}));

console.log('------------------')

console.log(bigNum([1]), '->', 1)
console.log(bigNum([1, 2, 3]), '->', 3)
console.log(bigNum([-5, 78, 14, 0, 18]), '->', 78)
console.log(bigNum([-1, -2, -3, -4, -5, -6, -7, -8]), '->', -1)
console.log(bigNum([-98, 15, 45, -3.14, 'labas']));
console.log(bigNum([-98, 15, 'labas', 45, -3.14]));
console.log(bigNum(['labas', -98, 15, 45, -3.14]));
console.log(bigNum([, -98, 15, 45, -3.14]));
console.log(bigNum([-5, 78, 14, Infinity, 18]), '->', 78)

console.log('------------------')


