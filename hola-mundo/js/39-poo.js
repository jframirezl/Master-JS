function Persona(nombre, edad){
// Propiedades públicas    
    this.nombre = nombre; 
    this.edad = edad;
// Propiedades privadas
    let dni = "1234567890"; 
    console.log('Hola, soy ' +nombre);

    this.getDni = () => dni;

    // this - se refiere a otro objeto de ESTA misma clase 
    this.saludar = () => {console.log("Hola, soy " + nombre + " tengo " + edad + " años. Mi DNI es " + this.getDni())};
};

let objetoJorge = new Persona("Jorge Ramirez", 37);
let objetoPaco = new Persona("Paco Moreno", 37);
console.log(objetoJorge.getDni());
console.log(objetoJorge.saludar());