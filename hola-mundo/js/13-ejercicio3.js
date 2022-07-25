let suma = 0;
let media = 0;
let i = 0;

do {
    var n1 = parseInt(prompt("Introduzca un número", 0));

    if (n1 === 0) {
        alert("Introduzca un número diferente de 0")
    } else {
        if (n1 >= 0) {
            i++;
            suma = suma + n1;
            if (i > 0) {
                media = suma / i;
            }
            document.open();
            alert(`        
        Sumatoria: ${suma}
        Cantidad de números introducidos: ${i}
        Media: ${media}`);
            document.close()
        } else {

            if (typeof n1 != 'number') {
                alert("Solo se permiten números");
            } else {
                alert(`Se introdujo un número menor que 0, se termina operación. 
            Resultados:
            Sumatoria: ${suma}
            Cantidad de números introducidos: ${i}
            Media: ${media}`);
            suma = 0;
            media = 0;
            i = 0;            
            }

        };
    };


}
while (typeof n1 === 'number');