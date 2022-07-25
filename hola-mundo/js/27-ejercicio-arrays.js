/*
1.- Pida 6 números por pantalla y los meta en un Array
2.- Mostrar el array entero (todos sus elementos) en el cuerpo de la página y en la consola
3.- Ordenarlo y mostrarlo
4.- Invertir su orden y mostrarlo
5.- Mostrar cuántos elementos tiene el array
6.- Búsqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su índice (se valorará el uso de funciones)
*/

// 1.- Pida 6 números por pantalla y los meta en un Array
document.write("<h1>1.- Pida 6 números por pantalla y los meta en un Array</h1>");
var vez = 0;
var numeros = [];
do{
    vez++;
    let numero = parseInt(prompt("Indique un número:", 0));
    numeros.push(numero);
}while( vez <= 5 );
document.write(numeros);

// 2.- Mostrar el array entero (todos sus elementos) en el cuerpo de la página y en la consola
document.write("<h1>2.- Mostrar el array entero (todos sus elementos) en el cuerpo de la página y en la consola</h1>");
document.write("<ul>");
for(let numero in numeros){
    document.write("<li>"+numeros[numero]+"</li>");    
}
document.write("</ul>");

// 3.- Ordenarlo y mostrarlo
document.write("<h1>"+"3.- Ordenarlo y mostrarlo"+"</h1>");
numeros.sort();
console.table(numeros);
document.write("<ul>");
numeros.forEach((elemento)=>{
    document.write("<li>"+elemento+"</li>");
});
document.write("</ul>");
console.table(numeros);

// 4.- Invertir su orden y mostrarlo
document.write("<h1>"+"4.- Invertir su orden y mostrarlo"+"</h1>");

let i = numeros.length - 1;
document.write("<ul>");
do{
    document.write("<li>"+numeros[i]+"</li>");
    i--;
}while(i>=0);

document.write("</ul>");

// 5.- Mostrar cuantos elementos tiene el Array
document.write("<h1>5.- Mostrar cuantos elementos tiene el Array</h1>");
document.write("<h2>"+"El array tiene "+numeros.length+" elementos"+"</h2>");

// 6.- Búsqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su índice
document.write("<h1>6.- Búsqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su índice</h1>");
alert("El siguiente mensaje pedirá un número a buscar, como resultado, nos dirá si lo encontró y en qué índice fue introducido");

var buscar = prompt("Indique un número a buscar",0);
// var busqueda = numeros.find(numero => numero == buscar);

numeros.sort()
var busqueda = numeros.some(numero=> numero == buscar );
if(busqueda == true){
    var busqueda = numeros.findIndex(lenguaje => lenguaje == buscar);
    document.write("<h2>El número "+buscar+ " fue introducido en el índice "+busqueda+"</h1>");
}else{
    document.write("<h2>El número "+buscar+ " no fue introducido, por lo tanto no existe</h1>"); 
}
