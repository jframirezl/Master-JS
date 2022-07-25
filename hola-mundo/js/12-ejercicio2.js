do {
    var n1 = parseInt(prompt("Número 1", 0));
    var n2 = parseInt(prompt("Número 2", 0));

    if (n1 === 0 && n2 === 0) {
        alert("Introduzca al menos un número mayor que 0")
    }
    if(typeof(n1 != 'number' || n2 != 'number')){
        alert("Solo se permiten números");
    }
}
while ((typeof n1 === 'NaN' || typeof n2 === 'NaN') || (n1 <= 0 && n2 <= 0));

if (n1 === n2) {
    alert(`Los números ${n1} y ${n2} son iguales`);
} else if (n1 > n2) {
    alert(`El número ${n1} es mayor que el número ${n2}, por lo tanto ${n2} es menor que ${n1}`);
} else if (n2 > n1) {
    alert(`El número ${n2} es mayor que el número ${n1}, por lo tanto ${n1} es menor que ${n2}`);
}