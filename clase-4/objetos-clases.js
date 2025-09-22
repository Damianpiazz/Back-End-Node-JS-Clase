// Objeto Literal

const persona_1 = {
    nombre: "Nico",
    edad: 28,
    saludar: function() {
        console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`);
    }
}

persona_1.saludar();

// Funcion constructora
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.saludar = function() {
        console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`);
    };
}

// Crear una instancia
const persona_2 = new Persona("Nico", 28);
const persona_3 = new Persona("Juana", 32);

persona_2.saludar();
persona_3.saludar();