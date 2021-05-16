/* LES COMPARATEURS */
console.log('Bienvenue dans la console javascript');
console.log('Vous êtes dans les exercices sur les comparateurs');

// ------ TODO 1 ------ 
// 1. Créer une variable neighbourAge qui contient l'âge de votre voisin

var neighbourAge = 45;


// 2. Créer une variable myAge qui contient votre âge

var myAge = 24;


// 3. Comparez les variables neighbourAge et monAge en utilisant des comparateurs (<, <=, >, >=, ===, !== ...)
// puis affichez le résultat des comparaisons dans la console avec la méthode "console.log".

var iamOlder = myAge > neighbourAge;
var iamOlderOrSameAge = myAge >= neighbourAge;
var imSameAge = myAge === neighbourAge;
var imNotSameAge = myAge !== neighbourAge;
var imYoungerOrSameAge = myAge <= neighbourAge;
var imYounger = myAge < neighbourAge;

console.log(iamOlder, iamOlderOrSameAge, imSameAge, imNotSameAge, imYoungerOrSameAge, imYounger);

// ------ TODO 2 ------ 
// 1. Créer une fonction showGreaterNumber qui prend en paramètre deux nombres et
// qui affiche le plus grand des deux dans la console.

function showGreaterNumber(x, y){
    var greaterNumber;
    if(x >= y){
        greaterNumber = x;
    }else{
        greaterNumber = y;
    }
    console.log(greaterNumber);
}


// 2. L'exécuter avec les paramètres de votre choix.

showGreaterNumber(3, 5);
showGreaterNumber(4, 2);
showGreaterNumber(6, 6);

// ------ TODO 3 ------ 
// 1. Créer une fonction isBetween1000And3000 qui prend en paramètre une variable et
// qui renvoie un booléen indiquant si la variable est un nombre compris entre 1000 et 3000.

function isBetween1000And3000(x){
    return ((x >= 1000) && (x <= 3000));
}


// 2. L'exécuter avec le paramètre de votre choix.

console.log(isBetween1000And3000(999));
console.log(isBetween1000And3000(1000));
console.log(isBetween1000And3000(2000));
console.log(isBetween1000And3000(3000));
console.log(isBetween1000And3000(3001));