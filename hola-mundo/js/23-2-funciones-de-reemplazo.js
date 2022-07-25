'use strict'

var numero = 444;
var texto1 = "Bienvenido al curso de Javascript curso de Jorge Ramirez";
var texto2 = "Es muy buen curso";

// replace - Reemplaza el valor de la izquierda por el de la derecha
var busqueda = texto1.replace("Javascript", "Symphony");
console.log(busqueda);

// split - Rebana/parte un texto a partir del carácter indicado
var busqueda = texto1.slice(14);
console.log(busqueda);

// Se puede usar indicándole también hasta qué carácter rebane
var busqueda = texto1.slice(14, 22);
console.log(busqueda);

// split - Pasa el texto a un arreglo
var busqueda = texto1.split();
console.log(busqueda);

// Y separa en un índice distinto cada palabra si se le indica un separador
var busqueda = texto1.split(" ");
console.log(busqueda);

// trim - Elimina los espacios del inicio y del final 
var texto1 = "   Bienvenido al curso de Javascript curso de Jorge Ramirez   ";
var busqueda = texto1.trim();
console.log(busqueda);