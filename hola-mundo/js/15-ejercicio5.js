// 5.- Mostrar todos los números impares que hay entre dos números introducidos por el usuario
var n1 = parseInt(prompt("Número 1", 0));
var n2 = parseInt(prompt("Número 2", 0));
var error = false;
var sobrante = 0;

if (n1 === 0 || n2 === 0) {
    alert("Ambos números deben ser mayor que 0");
    error = true;
};
if (typeof n1 != 'number' || typeof n2 != 'number') {
    alert("Solo se permiten números");
    error = true;
};
if (n2 <= n1) {
    alert("Número 2 debe ser mayor que Número 1");
    error = true;
};
if (!error) {
    let mensaje;
    for (i = n1; i <= n2; i++) {
        sobrante = i % 2;
        if (sobrante > 0) {
            if (typeof mensaje === 'undefined') {
                mensaje = i;
            } else {
                mensaje = `${mensaje}, ${i}`;
            };
        };
    };
    alert(`Entre los números ${n1} y ${n2} existen los siguientes números impares:
    ${mensaje}`);
};