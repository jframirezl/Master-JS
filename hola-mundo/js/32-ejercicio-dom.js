'use strict'

window.addEventListener('load', function () {
    let boton = document.querySelector("#enviar");
        
    darEstilo();
    boton.addEventListener('click', () => {
        if (validarDatos()) {
            enviarDatos();
        } else {
            mostrarResultado(false);
        };
    });
});

function darEstilo() {
    let main = document.querySelector("main"),
        input = document.getElementById("input"),
        display = document.getElementById("display"),
        resultado = document.getElementById("resultado"),
        titulo = document.getElementById("titulo"),
        cajas = document.querySelectorAll("input");

    main.style.display = "flex";

    input.style.display = "flex";
    input.style.flexDirection = "column";
    input.style.padding = "10px 50px 10px 10px";

    display.style.display = "flex";
    display.style.flexDirection = "column";
    display.style.lineHeight = "200%";

    resultado.style.display = "none";

    titulo.style.textAlign = "center";

    for (let caja in cajas) {
        if (parseInt(caja) >= 3 && parseInt(caja) <= 5) {
            cajas[parseInt(caja)].style.borderStyle = "none";
        };
    };
};

function validarDatos(enviar) {
    let response = false;
    if (validarNombre()) {
        response = true;
    };
    if (validarApellidos()) {
        response = true;
    };
    if (validarEdad()) {
        response = true;
    };
    return response;
};

function validarNombre() {
    let campoNombre = document.getElementById("campoNombre"),
    response = true;
    if (campoNombre.value.trim() == null || campoNombre.value.trim().length == 0) {
        alert("El nombre no es válido");
        response = false;
    }
    return response;
}
function validarApellidos() {
    let campoApellidos = document.getElementById("campoApellidos"),
    response = true;
    if (campoApellidos.value.trim() == null || campoApellidos.value.trim().length == 0) {
        alert("Los apellidos no son válidos");
        response = false;
    }
    return response;
}
function validarEdad() {
    let campoEdad = document.getElementById("campoEdad"),
    response = true;
    if (campoEdad.value == null || isNaN(parseInt(campoEdad.value))) {
        alert("La edad no es válida");
        response = false;
    }
    return response;
}
function enviarDatos() {
    let resultado = document.getElementById("resultado"),
        nombre = document.getElementById("Nombre"),
        campoNombre = document.getElementById("campoNombre"),
        apellidos = document.getElementById("Apellidos"),
        campoApellidos = document.getElementById("campoApellidos"),
        edad = document.getElementById("Edad"),
        campoEdad = document.getElementById("campoEdad");

    nombre.value = campoNombre.value;
    apellidos.value = campoApellidos.value;
    edad.value = campoEdad.value;

    resultado.style.display = "flex";
    resultado.style.flexDirection = "column";
    resultado.style.borderStyle = "dashed";
    resultado.style.padding = "10px";
}

function mostrarResultado(mostrar){
    let resultado = document.getElementById("resultado");
    if(mostrar){
        resultado.style.display = "flex";
    }else{
        resultado.style.display = "none";
    }    
}