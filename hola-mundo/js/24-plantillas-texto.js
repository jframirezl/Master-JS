'use strict'

// Plantillas de texto 
var nombre = prompt("METE TU NOMBRE");
var apellidos = prompt("METE TUS APELLIDOS");

var texto = "Mi nombre es: "+nombre+" <br/> Mis apellidos son: "+apellidos;

document.write(texto);

var texto = `
    <h1>Hola qué tal</h1>
    <h2>Mi nombre es: </h2>
    <h3>Mis apellidos son: ${apellidos}</h3>
`;

documento.write(texto);