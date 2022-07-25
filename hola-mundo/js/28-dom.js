'use strict'

// DOM - Document Object Model

function cambiarColor(color){
    caja.style.background = color;
}

// Conseguir elementos con un ID concreto 

var caja              = document.getElementById("micaja");
var caja = document.querySelector("#micaja");

caja.innerHTML        = "¡TEXTO EN LA CAJA DESDE JS!";
caja.style.background = "red";
caja.style.padding    = "20px";
caja.style.color      = "white";
caja.className        = "hola hola2";

console.log(caja);

// Conseguir elementos por su etiqueta
var todosLosDivs = document.getElementsByTagName("div");

var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");

// todosLosDivs.forEach((valor, indice)=>{
var valor;
for(valor in todosLosDivs){
    if(typeof todosLosDivs[valor].textContent =="string"){
    var parrafo = document.createElement("p");
    var texto   = document.createTextNode(todosLosDivs[valor].textContent);
    parrafo.append(texto);
    seccion.append(parrafo);
    }
}
seccion.append(hr);

// var divsRojos = document.getElementsByClassName("rojo");
// var divsRojos = document.querySelectorAll("div.rojo, div.amarillo");
var divsRojos = document.querySelectorAll("div.rojo");
console.table(divsRojos);
var divsAmarillos = document.getElementsByClassName("amarillo");


divsAmarillos[0].style.background = "yellow";

for(let div in divsRojos){
    if(divsRojos[div].className == "rojo"){
        divsRojos[div].style.background = "red";
    }
}