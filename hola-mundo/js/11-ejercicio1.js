var n1 = parseInt(prompt("Número 1", 0));
var n2 = parseInt(prompt("Número 2", 0));

console.log(n1,n2);

if(n1 === n2){
    alert(`Los números ${n1} y ${n2} son iguales`);
}else if(n1 > n2){
    alert(`El número ${n1} es mayor que el número ${n2}, por lo tanto ${n2} es menor que ${n1}`);
}else if(n2 > n1){
    alert(`El número ${n2} es mayor que el número ${n1}, por lo tanto ${n1} es menor que ${n2}`);
}    