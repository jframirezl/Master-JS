var lenguajes = new Array ("PHP", "JS", "Go", "Java", "C#", "C", "Pascal");

document.write("<h1> Lenguajes de programación del 2018</h1>");
document.write("<ul>");

// Primer parámetro siempre será el elemento, el segundo el índice
lenguajes.forEach((elemento, indice )=>{
    document.write("<li>"+indice+" - "+elemento+"</li>");
});

// for in - Recorre arrglo y recupera índice en cada vuelta
for(let lenguaje in lenguajes){
    document.write("<li>"+lenguajes[lenguaje]+"</li>");
}