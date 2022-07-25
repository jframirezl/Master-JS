'use strict'
// Transformación de textos 
var numero = 444;
var texto1 = "Bienvenido al curso de JavaScript de Jorge Ramirez";
var texto2 = "Es muy buen curso";

var dato = numero.toString();
    dato = texto1.toLowerCase();
    dato = texto2.toUpperCase();

// console.log(typeof dato);

// Calcular longitud
var nombre = "Jorge Ramirez";

// console.log(nombre.length);

// Concatenar - Unir textos 

// var textoTotal = texto1+" " + texto2;
var textoTotal = texto1.concat(" "+texto2);

console.log(textoTotal);