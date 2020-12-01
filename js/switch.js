const darzove = 'morka';

switch(darzove) {
	case 'morka':
		console.log('Labai gerai tavo regejimui.');
		break;

	case 'bulve':
		console.log('Darzoviu duona.');
		break;

	case 'pomidoras':
		console.log('Storaraudonaskruostis.');
		break;

	default:
		console.log('Neatitiko jokios zinomos darzoves.');
		break;
}

console.log('-----------------');

const etapas = 'ismaisyti';

switch(etapas) {
	case 'puodelis':
		console.log('1) pasiimti puodeli;');

	case 'ingredientas':
		console.log('2) isideti pagrindini ingreadienta;');

	case 'saldiklis':
		console.log('3) isideti saldiklio pagal poreiki;');

	case 'vanduo':
		console.log('4) uzpilti vandens;');

	case 'ismaisyti':
		console.log('5) ismaisyti ruosiama gerima;');

	case 'gerti':
		console.log('6) galite gerti, Skanaus!;');
		break;

	default:
		console.log('nezinomas proceso zingsnis');
}