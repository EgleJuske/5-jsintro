// pazymiai

const pazymiai = [10, 6, 7, 6];

//skaiciuojame vidurki
console.log(pazymiai);

const sarasoSuma = pazymiai[0] + pazymiai[1] + pazymiai[2] + pazymiai[3];
const skaiciuKiekis = pazymiai.length;

const vidurkis = sarasoSuma / skaiciuKiekis;
console.log('Vidurkis: ', vidurkis);


// zodynas

const zodynas = ['Labas', 'rytas', 'Lietuva'];

// sujungti reiksmes atgaline tvarka ir iterpti ", "

const sakinys = zodynas[2] + ', ' + zodynas[1] + ', ' + zodynas[0];
console.log(sakinys);