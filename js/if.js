/* 
if - salygos funkcija

galimi palyginimo operatoriai:
>       daugiau
<       maziau
==      lygu
!=      nelygu
>=      daugiau arba lygu
<=      maziau arba lygu
===     lygios reiksmes ir tipas
!==     nelygios reiksmes ir tipas

naudotini: >, <, >=, <=, ===, !==
nenaudotini: ==, !=

funkciju uzrasymas:
if () {}
if () {} else {}
if () {} else if {} else {}

*/

const a = 4;
const b = 2;

// ar a yra daugiau uz b?

if (a > b) {
	console.log('Taip, a yra daugiau uz b.');
}

console.log('------------------');

if (a < b) {
	console.log('A yra maziau uz B');
} else {
	console.log('A nera maziau uz B');
}

console.log('------------------');

const duSkaiciai = [6, 612];

// kuri saraso reiksme yra didesne

const pirmasSkaicius = duSkaiciai[0];
const antrasSkaicius = duSkaiciai[1];

if (pirmasSkaicius > antrasSkaicius) {
	const duSkaiciaiRez = `${pirmasSkaicius} yra daugiau uz ${antrasSkaicius}`;
	console.log(duSkaiciaiRez);
} else {
	console.log(`${pirmasSkaicius} nera daugiau uz ${antrasSkaicius}`);
}

console.log('------------------');

const diena = 'ket';

if (diena === 'pir') {
	console.log('Pirmadienis');
} else {
	if (diena === 'ant') {
		console.log('Antradienis.');
	} else {
		if (diena === 'tre') {
			console.log('Treciadienis');
		}
		else {
			if (diena === 'ket') {
				console.log('Ketvirtadineis');
			}
			else {
				if (diena === 'pen') {
					console.log('Penktadienis');
			}
				else {
					if (diena === 'ses') {
						console.log('Sestadieniss');
				}
					else {
						if (diena === 'sek') {
							console.log('Sekmadienis');
						} else {
							console.log('panasu kad ne savaites diena...');
						}
					}
				}
			}
		}
	}
}

console.log('---------------')

const day = 'mon';

if (day === 'mon') {
	console.log("Monday");
} else if (day === 'tue') {
	console.log('Tuesday');
} else if (day === 'wed') {
	console.log('Wednesday');
} else if (day === 'thu') {
	console.log('Thursday');
} else if (day === 'fri') {
	console.log('Friday');
} else if (day === 'sat') {
	console.log('Saturday');
} else if (day === 'sun') {
	console.log('Sunday');
} else {
	console.log('not a weekday...');
}

console.log('---------------------')

if (7 !== 6) {
	console.log('OK');
} else {
	console.log('not so good');
}