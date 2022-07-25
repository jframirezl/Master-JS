var lenguajes = new Array ("PHP", "JS", "Go", "Java", "C#", "C", "Pascal");

let lenguaje;

// var busqueda = lenguajes.find(function(lenguaje){
//     return lenguaje == "PHP7";
// });

// find - Busca un valor específico 
var busqueda = lenguajes.find(lenguaje => lenguaje == "PHP");
console.log(busqueda);

// indexOf - Busca un índice
var busqueda = lenguajes.findIndex(lenguaje => lenguaje == "JS");

console.log(busqueda);

var precios = [10, 20, 30, 80, 12];

var busqueda = precios.some(precio => precio >= 80 );

console.log(busqueda);