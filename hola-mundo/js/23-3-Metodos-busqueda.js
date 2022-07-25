'use strict'

var numero = 444;
var texto1 = "Bienvenido al curso de Javascript curso de Jorge Ramirez";
var texto2 = "Es muy buen curso";

// Búsqueda de primera incidencia:
var busqueda = texto1.match("curso");
console.log(busqueda);

// Búsqueda de todas las incidencias 
busqueda = texto1.match(/curso/g);
console.log(busqueda);


busqueda = texto1.substr(14,5);
console.log(busqueda);

busqueda = texto1.charAt(45);
console.log(busqueda);

var busqueda = texto1.startsWith("Bienvenido");
console.log(busqueda);