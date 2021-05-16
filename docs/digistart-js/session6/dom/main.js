/* LE DOM */
console.log('Bienvenue dans la console javascript');
console.log("Vous êtes dans l'exercice 1 sur le DOM");

// ------ TODO 1 ------
// Créez une variable récupérant l'élément button ayant l'id "myButton" du HTML.

var myButton = document.getElementById('myButton');


// ------ TODO 2 ------
// Modifier le texte de l'élément button grâce à sa propriété innerHTML.

myButton.innerHTML = "NEW TEXT";


// ------ TODO 3 ------
// Créez une variable récupérant tous les éléments de type paragraphe.

var paragraphes = document.getElementsByTagName('p');
console.log(paragraphes);


// ------ TODO 4 ------
// Créez une variable récupérant le paragraphe avec la classe "blue".

// var paragraphe_bleue = document.getElementsByClassName('blue');
var paragraphe_bleue = document.querySelectorAll('p.blue')[0];
console.log(paragraphe_bleue);


// ------ TODO 5 ------
// Créez une variable récupérant le paragraphe avec l'id "hideMe".

var hideMe = document.getElementById("hideMe");
console.log(hideMe);


// ------ TODO 6 ------
// Modifiez le style du paragraphe avec l'id "hideMe" pour le faire disparaître.

hideMe.style.visibility = "hidden"; 
