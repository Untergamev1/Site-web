
var maVariable = 'Hello World';

console.log('Hello World!');

let age = 30;

age = 31;

console.log(typeof maVariable);

const nombre1 = 10;
const nombre2 = 5;

const somme = nombre1 - nombre2;
console.log(somme);

const uneChaine = 'ceci est une" chaine';

const uneAutreChaine = "une autre'''' chaine";

const encoreUneAutreChaine = `Yet anot
her string`; 

let nombre = 123; let texte3 = nombre.toString();
console.log(texte3);

const concatString = uneChaine + 'test' + uneAutreChaine;

console.log(concatString);

const concatMethod = encoreUneAutreChaine.concat(',that\'s so great!');

console.log(concatMethod);

let nom = 'Jean';
let prenom = 'Dupont';

const stringLength = encoreUneAutreChaine.length;
console.log(stringLength) //commentaire

/**
 * commentaire sur plusieurs lignes
 * 
 * test
 */
// commentaire 

const myArray = [1, 2, 3, 4, 5, 6, 7]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    
}

console.log(myArray)
