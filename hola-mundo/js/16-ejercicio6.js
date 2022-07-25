// 6.- Muestre todos los números divisores de un número introducido en prompt
var sobrante = 0;
var error = false;
var mensaje;
var n1 = parseInt(prompt("Introduzca un número", 0));

if (n1 === 0) {
    alert("Introduzca un número diferente de 0")
    error = true;
} else {
    for (i = 0; i <= n1; i++) {
        sobrante = n1 % i;
        if (sobrante === 0) {
            if (typeof mensaje === 'undefined') {
                mensaje = i;
            } else {
                mensaje = `${mensaje}, ${i}`;
            };

        };

    };
};
if (!error) {
    alert(`Los números divisores de ${n1} son: ${mensaje}`);
}