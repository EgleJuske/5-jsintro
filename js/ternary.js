/*
Ternary opatator

liaudiskai: inline if'as, kuris savyje turi ir gali tureti tik TRUE ir FALSE dalis.

if'o klausimas ? jeigu teigiamas ats : jeigu neigiamas ats

*/

const makesSense = false;
const ats = makesSense ? 'taip' : 'ne';


console.log(4 === 2 ? 'Daugiau' : 'Ne daugiau');

const amziausRiba = 40;

const amzius = 99;

const verdiktas = amzius >= amziausRiba ? 'I prezidentus!' : 'dar reikes palaukti';

console.log(`jei tau ${amzius} - ${verdiktas}`);


console.log('---------------');

const sezonas = 'vasara';
const temp = 10;

if (sezonas === 'vasara') {
    if (temp > 10) {
        console.log('maike');
    } else {
        console.log('golfas');
    }
} else {
    if (temp > 10) {
        console.log('megztinis');
    } else {
        console.log('striuke');
    }
}

/*
const kaVilktis = sezonas === 'vasara' ?
                    temp > 10 ? 
                        'maike' :
                        'golfas' :
                    temp > 10 ?
                        'megztinis' :
                        'striuke';
*/

const kaVilktis = sezonas === 'vasara' ? temp > 10 ? 'maike' : 'golfas' : temp > 10 ? 'megztinis' : 'striuke';

console.log(kaVilktis);