'use strict'

var categorias = ['Acción', 'Terror', 'Comedia'];
// var peliculas  = ['La verdad duele', 'La vida es bella', 'Gran torino'];
var peliculas = [1, 2, 3];

// var elemento = prompt("Introduce una película");
var elemento = "";
do{
    elemento = prompt("Introduce tu película");

// push - agrega un elemento al final del arreglo     
    peliculas.push(elemento);
}while(elemento != "ACABAR");


// pop - elimina el último elemento de un array 
peliculas.pop();

console.log(peliculas);

// sort - Ordenar un array 
peliculas.sort();
console.log(peliculas);

// indexOf - Se posiciona en un índice de un array 
var indice = peliculas.indexOf('Gran torino');
if(indice > -1 ){

// splice - A partir de un índice indicado borra la cantidad de elementos de un arreglo que se le indique
    peliculas.splice(indice, 1);
}

// join - convierte un array a texto, separado por comas
var peliculasString = peliculas.join();

console.log(peliculasString);

// split - Convierte un texto en array 
var cadena = "texto1, texto2, texto3";
var cadenaArray = cadena.split(", ");

console.log(cadenaArray);