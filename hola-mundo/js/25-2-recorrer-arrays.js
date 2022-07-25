var lenguajes = new Array ("PHP", "JS", "Go", "Java", "C#", "C", "Pascal");

document.write("<h1>Lenguajes de programación del 2018</h1>");
document.write("<ul>");

lenguajes.forEach((elemento, indice, arr)=>{
    document.write("<li>"+indice+" - "+elemento+"</li>");
});