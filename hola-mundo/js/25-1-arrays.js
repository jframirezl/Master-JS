'use strict'

// Arrays, Arreglos, Matrices 

var nombre = "Victor Robles";
var nombres = ["Victor Robles", "Juan Lopez", "Manolo García", "José Martin", 53, true];

var lenguajes = new Array ("PHP", "JS", "Go", "Java", "C#", "C", "Pascal");

console.log(nombres[2]);

var elemento = parseInt(prompt("¿Qué elemento del array quieres?", 0));

if(elemento >= nombres.length){
    alert("Introduce el número correcto menor que " + nombres.length);
}else{
    alert("El usuario seleccionado es: "+nombres[elemento]);
}

document.write("<h1>Lenguajes de programación del 2018</h1>");
document.write("<ul>");

for(var i = 0; i < lenguajes.length; i++){
    document.write("<li>"+lenguajes[i]+"</li>");
}
document.write("</ul>");