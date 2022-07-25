'use strict'

// Funciones de flecha
// Es una función que no tiene nombre
var pelicula = nombre => {
    return "La película es " +nombre;
}

// Se pueden declarar funciones flecha referenciadas a una variable
// Si llevan más de un parámetro, los parámetros deben ir separados por comas y toda la lista entre paréntesis
var sumame = (numero1, numero2, sumaYMuestra, sumaPorDos) => {
    var sumar = numero1 + numero2;
    sumaYMuestra(sumar);
    sumaPorDos(sumar);
    return sumar;
}

// Aquí inicia el llamado a la función sumame, con parámetros 5, 7 y 2 parámetros de funciones anónimas
sumame(5,7, 
// Este es un parámetro que llama una  función flecha
    dato=>{ // Aquí solo hay un parámetro, por lo tanto, no es necesario usar paréntesis
    console.log("La suma es: ", dato);
},
// Este es el otro parámetro de función flecha 
dato=>{
    console.log("La suma por dos es:", (dato*2));
});