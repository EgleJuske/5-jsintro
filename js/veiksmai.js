/* Matematines operacijos */

const skaicius1 = 5;
const skaicius2 = 8;

const suma = skaicius1 + skaicius2;

console.log(skaicius1, '+', skaicius2, '=', suma);

const skaicius3 = 88;
const skaicius4 = 77;
const skirtumas = skaicius3 - skaicius4;

console.log(skaicius3, '-', skaicius4, '=', skirtumas);

const skirtumas2 = skaicius1 - skaicius2;
console.log(skaicius1, '-', skaicius2, '=', skirtumas2);

const sandauga = skaicius1 * skaicius2;
console.log(skaicius1, '*', skaicius2, '=', sandauga);

const dalmuo = skaicius1 / skaicius2;
console.log(skaicius1, '/', skaicius2, '=', dalmuo);

console.log('----------------');

let zodis1 = 'labas';
const zodis2 = 'rytas';
const zodis3 = 'Lietuva';
const sakinys = zodis1 + ' ' + zodis2 + ', ' + zodis3;
console.log(sakinys);

const txt1 = "Lorem";
const txt2 = 'ipsum';
const vienguba = "'";
const dviguba = '"';

const txt3 = "Sakinyje yra vienguba ' kabute.";
const txt4 = 'Sakinyje yra dviguba " kabute.';
console.log(txt3);
console.log(txt4);

const txt5 = 'skainyje yra' + vienguba + dviguba + 'kabutes';
console.log(txt5);

const txt6 = 'skainyje yra vienguba \' ir dviguba \" kabutes';
console.log(txt6);


const pvm = 21;
const petroPajamos = 100;
const marytesPajamos = 200;

const petroMokesciai = petroPajamos * pvm / 100;
const marytesMokesciai = marytesPajamos * pvm / 100;

console.log('Mokesciai:', petroPajamos, '->', petroMokesciai);
console.log('Mokesciai:', marytesPajamos, '->', marytesMokesciai);

console.log('----------------');

const pilnasHTML = '<div>\
<h1>JS rocks!</h1>\
<p>Lorem ipsum</p>\
</div>';

console.log(pilnasHTML);

/* `` atvaizduoja kodą konsolėje jau suformatuotą pagal html taisykles */

const backtickHTML = `<div>
<h1>JS rocks!</h1>
<p>Lorem ipsum</p>
</div>`;

console.log(backtickHTML);


const jsText = 'JS rocks!';
const emoji = '⚡✌';
const htmlText = 'Lorem ipsum';

const tekstasSuKitamaisiais = '<div>\
<h1>' + jsText + ' ' + emoji + '</h1>\
<p>' + htmlText + '</p>\
</div>';

console.log(tekstasSuKitamaisiais);

const tekstasBePliusu = `<div>
<h1>${jsText} ${emoji}</h1>
<p>${htmlText}</p>
</div>`;

console.log(tekstasBePliusu);
