
		const skaiciu = 7;						// number
const teksta = 'kazkas';				// string
const tiesa = true;						// boolean
const melas = false;					// boolean
const pazymiai = [5, 8];				// object (array)
const zodziai = ['labas', 'rytas'];		// object (array)

// typeof - yra operatorius

console.log(skaiciu, typeof skaiciu);
console.log(teksta, typeof teksta);
console.log(tiesa, typeof tiesa);
console.log(pazymiai, typeof pazymiai);
console.log(zodziai, typeof zodziai);
console.log('null', typeof null);
console.log('NaN', typeof NaN);
console.log('-------------');


/* 
zmogus = vardas, pavarde, kiek metu, kada gime, ar turi suni, ar turi kate, kiek ranku, kiek koju, kiek galvu]
*/

const arrayZmogus = ['vardenis', 'pavardenis', 20, 2000, false, true, 2, 2, 1];

const zmogus = {
	vardas: 'Vardenis',
	pavarde: 'Pavardenis',
	amzius: 20,
	gimimoMetai: 2000,
	kojuSkaicius: 2,
	rankuSkaicius: 2,
	galvos: 1,
	turiKate: true,
	turiSuni: false,
	tevai: {
			motina: {
				vardas: 'Onute',
				lytis: true
			},
			tevas: {
				vardas: 'Petras',
				lytis: false}
			}
}

console.log(zmogus);
console.log(zmogus['vardas']);
console.log(zmogus['turiKate']);

console.log(zmogus.pavarde);
console.log(zmogus.turiSuni);
console.log(zmogus.gimimoMetai);


const auto = {
	marke: 'Tesla',
	modelis: 3,
	spalva: 'raudona',
	baterija: 100,
	durys: 4,
}

console.log(auto.marke);
console.log(`Mano ${auto.marke} yra ${auto.spalva} ir turi ${auto.durys} duris`);

// zmogui priskiriame automobili

zmogus.automobilis = auto;
console.log(zmogus);

console.log(zmogus.automobilis.marke);

zmogus.automobilioMarke = auto.marke;
console.log(zmogus);

console.log(zmogus.tevai.motina.vardas);