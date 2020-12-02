const skaicius1 = 4;
const skaicius2 = 8;
const skaicius3 = -5;


function multiply(pirmasisDaugiklis, antrasisDaugiklis) {
	const sandaugosRezultatas = pirmasisDaugiklis * antrasisDaugiklis;
	return sandaugosRezultatas;
};

const rez = multiply(skaicius1, skaicius2);
console.log(rez);
console.log(multiply(skaicius1, skaicius2));

const daugyba = multiply(skaicius1, skaicius2) * 3;

console.log(daugyba);



function mokesciai(pajamos) {
	const neapmokestinamasMinimumas = 500;
	const PVM = 20;
	let moketinaSuma = 0;

	for (let i = 0; i < pajamos.length; i++) {
		const uzdarbis = pajamos[i];

		if (uzdarbis > neapmokestinamasMinimumas) {
			moketinaSuma += uzdarbis - neapmokestinamasMinimumas;
		}
	}
	return moketinaSuma * PVM / 100;
}

const pajamos1 = [100, 500, 800, 5000, 15000];
const pajamos2 = [100, 500, 200];
const pajamos3 = [10000, 10000, 10000, 10000, 10000, 10000];


const mokesciai1 = mokesciai(pajamos1);
const mokesciai2 = mokesciai(pajamos2);
const mokesciai3 = mokesciai(pajamos3);

console.log('Pirmasis susimoka:', mokesciai1);
console.log('Antrasis susimoka:', mokesciai2);
console.log('Treciasis susimoka:', mokesciai3);