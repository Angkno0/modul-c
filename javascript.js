// modul c - avansert javascript

// repetisjon på funksjon

// funksjon deklarasjon : BOBS: en funksjon blir ikkje kjørt når den blir deklarert
// her er minFunksjon navnet på funksjonen
function minFunksjon() {
  // funksjonskodeblokk
  console.log("her er min funksjon");
}
minFunksjon(); //funksjonskall - functioncall: det er først ved kallet på funksjonen at den blir kjørt.

// en funksjon med en parameter "tall".
function minAndreFunksjon(tall, id = 5) {
  console.log(tall);
  console.log(id);
}

minAndreFunksjon(10);
minAndreFunksjon(-5);
minAndreFunksjon("dette er tekst");
minAndreFunksjon(-5, 100);
minAndreFunksjon();

//arrow funksjoner MÅ altid ha en returverdi.
// arrow function: arrow funksjon er "unnamed"/ navnløs funksjoner.

const returVerdi = (tekst) => {
  return tekst;
};

// console.log(returVerdi("ny tekst"));

// enlinje arrow funksjon
// så er "return statement" implied. automatisk retur.
const svar = (tall) => tall * 2; //er operator. ikkje den samme som >= som er større eller lik.
// console.log(typeof svar);
// console.log(svar(5));
// console.log(svar("dette er en test")); //NaN =Not a Number

//High order function/ metoder

//en funksjon (ikkje arrow) som returnerer en funksjon

//deklarerer en funksjon med navn og nummer som tar to parametere
//parameter nr 1: nummer -> denne funkjsonen forventer en ny array av nummer
//parameter nr 2: callback -> callback funksjonen du vil skal kjøyres på arrayen.
function nummer(nummer, callback) {
  //funksjonskodeblokk
  //MAP() metode -> high order metode
  return nummer.map(callback); //returnerer svaret til map() funksjonen.
}

const numbers = [1, 2, 3, 4, 5]; //oppretter en array av nummer 1 til 5
const dobbel = nummer(numbers, (num) => num * 2);
// console.log(dobbel);

const numbers100 = nummer(numbers, (num) => num * 100);
// console.log(numbers100);

function number(numbers, callback) {
  return numbers.map(callback);
}

const siffer = [1, 2, 3, 4, 5];
const trippel = number(siffer, (sif) => sif / 3);
// console.log(trippel);

// forEach - High order metode

// const newArray =[];

//returnerer ikkje noe som helst.
numbers.forEach((e, i, a) => {
  // newArray[i] = e * 3;
  // console.log(i);
  // console.log(e);
  // console.log(a);
});
// console.log("ny tabell");
// console.log(newArray);

//filter metode - high order
//må returnere enten true / false
const frukter = [
  "pære",
  "appelsin",
  "melon",
  "mango",
  "kiwi",
  "epple",
  "tomat",
];

const korrigertFrukter = frukter.filter((frukt) => frukt.startsWith("m"));

console.log(frukter);
console.log(korrigertFrukter);

const korrigertFrukter2 = frukter.filter((frukt) => {
  return frukt[0].toLowerCase() === "m";
});

console.log(frukter);
console.log(korrigertFrukter2);

//sort metoden bruker 2 parametere på callback function. Parameter a og b normalt sett.

const fruktar = [
  "pære",
  "appelsin",
  "melon",
  "mango",
  "kiwi",
  "epple",
  "tomat",
];
const sortertListe = fruktar.sort((a, b) => a.length - b.length);
console.log(sortertListe);

const sortertListeByLength = fruktar.sort((a, b) => {
  console.log("element a: " + a);
  console.log("element b: " + b);
  a.length - b.length;
});

//andre high order metoder er:
// reduce() //slår sammen alle verdier i en liste til en enkelt verdi. [1,2,3]= , avhengig av callback function som du angir.
// some() //boolean test
// every() //boolean test

// Oppgave:
// Sorter listen [8, 3, 5, 1, 9] i stigende rekkefølge.
// Skriv koden under:
const tal = [8, 3, 5, 1, 9];

const sorterteTall = tal.sort((a, b) => a - b);

console.log(sorterteTall); // Forventet resultat: [1, 3, 5, 8, 9]

// Oppgave:
// Fra listen [4, 7, 2, 9, 1, 6], finn bare tall som er større enn 5.
// Skriv koden under:
const numb = [4, 7, 2, 9, 1, 6];

const filtrerteTall = numb.filter((nu) => nu > 5);

console.log(filtrerteTall); // Forventet resultat: [7, 9, 6]

// Oppgave:
// Fra listen [2, 3, 4, 5], lag en ny liste der alle tall er ganget med 2.
// Skriv koden under:
const nummar = [2, 3, 4, 5];

function tai(numbers, callback) {
  return numbers.map(callback);
}

const gangetTall = tai(nummar, (num) => num * 2);

console.log(gangetTall); // Forventet resultat: [4, 6, 8, 10]

// const siffer =[1,2,3,4,5];
// const trippel = number(siffer, sif => sif / 3);

// function number(numbers, callback){
//     return numbers.map(callback);
//     }

// bonus oppgåve
const tall = [8, 3, 5, 1, 9, 4, 6];

const filtrere = tall
  .filter((e) => e > 4)
  .map((e) => e * 3)
  .sort((a, b) => a - b);

console.log(filtrere);
// Forventet resultat: [15, 18, 24, 27]

// oppg chain these the methods:
// 1. sort skal sortere liste etter bokstav nr 3( index 2);
// 2. map skal legge til ! bakerst på alle elementer
// 3: filter skal filtrere listen, der kun frukter som starter på m blir med
// rekkefølge på chaining er valgfri. HUSK at komandoene kjøres fra venstre til høyre.

/******************************************************************************
High order methods assignment

Read the assignment text CAREFULLY. 

Add comments to your code that briefly describe what your code does.

You are provided an object array that represent products for an online store.

Your tasks are:

1. Use .filter() to extract all products that cost less than 200

2. Use .map() to make a list that only contain the product names

3. Use a chained combination of .filter() and .map() to list only
the names of all products in a specific category (e.g. 'electronics')

4. Use .some() to check if there are any products that cost more than 1000

5. Use .reduce() to find the total cost of all the products.

******************************************************************************/

console.log("javascript advanced oppg");
const products = [
  { name: "Smartphone", price: 800, category: "electronics" },
  { name: "Headphones", price: 150, category: "electronics" },
  { name: "Coffee Maker", price: 100, category: "home appliances" },
  { name: "Blender", price: 250, category: "home appliances" },
  { name: "Laptop", price: 1200, category: "electronics" },
  { name: "T-shirt", price: 50, category: "clothing" },
  { name: "Sneakers", price: 300, category: "clothing" },
];

//   const filtrer =products.filter(e => e < 200 );

const lessThan = products.filter(product => product.price < 200);
console.log("these products cost less then 200! (price < 200):", lessThan);

const kategorier = products.map(product => product.name);
  console.log("product names :", kategorier);

const expensive = products.some(product => product.price > 1000);
console.log("these products are expensive:",expensive);

const getSum = products.reduce((total, product) => total + product.price, 0);
console.log("total of all products:", getSum);

const categories = products
.filter(product => product.category === 'electronics')
.map(product => product.name);
console.log("electronics:", kategorier);
// const  korrigertFrukter =frukter.filter(frukt => frukt.startsWith('m')); bro what am i even doingggg, i'll fix it on sunday
