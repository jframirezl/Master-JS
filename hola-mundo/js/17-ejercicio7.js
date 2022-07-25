// 7.- A través de un prompt, introducir un número y que nos diga si el número es par o impar, si el valor introducido no es válido, mensaje en alert y pedir el número de nuevo
var sobrante = 0;
let cachar;

do {
 
    var n1 = parseInt(prompt("Introduzca un número", 0));
    
    if (isNaN(n1)) {
        alert("Introduzca un número");
        error = true;
    }else{
        if(n1 === 0) {
            alert("Introduzca un número diferente de 0")
            error = true;
        } else {
                sobrante = n1 % 2;
                if (sobrante === 0) {
                    alert(`El número ${n1} es par`)                    
                } else {
                    alert(`El número ${n1} es impar`)
                };
                error = false;
        };
    };

} while (error);