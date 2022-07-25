'use strict'

// Funciones
// Una función es una agrupación reutilizable de un conjunto de instrucciones
function hola(){
    return "Hola, soy el resultado de una función";
}

console.log(hola());

// Definición de función con parámetros:
function calculadora(numero1, numero2){
    console.log("Suma: " + (numero1 + numero2));
    console.log("Resta: " + (numero1 - numero2));
    console.log("Multiplicación: " + (numero1 * numero2));
    console.log("División: " + (numero1 / numero2));

    return "Hola, soy la calculadora!!!"
}

// Invocar o llamar la función
var resultado = calculadora(12, 8);

console.log(resultado);

function porConsola(numero1, numero2){
    console.log("Suma: " + (numero1 + numero2));
    console.log("Resta: " + (numero1 - numero2));
    console.log("Multiplicación: " + (numero1 * numero2));
    console.log("División: " + (numero1 / numero2));
    console.log("**************************************");
}

function porPantalla(numero1, numero2){
    document.write("Suma: " + (numero1 + numero2)+"<br/>");
    document.write("Resta: " + (numero1 - numero2)+"<br/>");
    document.write("Multiplicación: " + (numero1 * numero2)+"<br/>");
    document.write("División: " + (numero1 / numero2)+"<br/>");
    document.write("**************************************"+"<br/>");
}

// Definición de función con parámetros opcionales:
function calculadora2(numero1, numero2, mostrar = false){
    if (mostrar == false){
        porConsola(numero1, numero2);
    }else{
        porPantalla(numero1, numero2);
    }
    return true;
}

// Invocar o llamar la función
var resultado2 = calculadora2(12, 8, true);

console.log(resultado2);