'use strict'

// Funciones anonimas
// Es una función que no tiene nombre

var pelicula = function(nombre){
    return "La película es " +nombre;
}

function sumame(numero1, numero2, sumaYMuestra, sumaPorDos){
    var sumar = numero1 + numero2;
    sumaYMuestra(sumar);
    sumaPorDos(sumar);
    return sumar;
}

// Aquí inicia el llamado a la función sumame, con parámetros 5, 7 y 2 parámetros de funciones anónimas
sumame(5,7, 
// Este es un parámetro de función anónima    
    function(dato){
    console.log("La suma es: ", dato);
},
// Este es el otro parámetro de función anónima   
function(dato){
    console.log("La suma por dos es:", (dato*2));
});