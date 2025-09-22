// Clase base
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`);
    }
}

// Clase derivada
class Estudiante extends Persona {
    constructor(nombre, edad, curso) {
        super(nombre, edad); // Llamada al constructor de la clase base
        this.curso = curso; // Nueva propiedad especifica
    }

    estudiar() {
        console.log(`Estoy estudiando ${this.curso}.`);
    }
}