'use strict'

// Localstorage 

// Comprobar disponibilidad de LocalStorage 
if(typeof(Storage) !== 'undefined'){
    console.log("LocalStorage disponible");
}else{
    console.log("Incompatible con LocalStorage");
}

// Guardar datos
localStorage.setItem("titulo", "Curso de Symfony con Jorge");

// Recuperar elemento 
document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

// Guardar objetos 
var usuario = {
    nombre: "Jorge Ramirez",
    email: "jorgeferminrl@gmail.com",
    web: "jorgeferminrl.mx"
};

localStorage.setItem("usuario", JSON.stringify(usuario));

// Recuperar objeto 
var userjs = JSON.parse(localStorage.getItem("usuario"));

console.log(userjs);
document.querySelector("#peliculas").append(" " + userjs.web+" - "+userjs.nombre);

// Borrar elemento de localStorage
localStorage.removeItem("userjs");

// Borrar todo el LocalStorage
localStorage.clear();