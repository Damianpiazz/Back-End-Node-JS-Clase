// Objetos
const persona = {
    nombre: "Nico",
    edad: 28,
    pais: "Argentina"
};

// Extrar propiedades con destructuración
const { nombre, edad, pais } = persona;

// Tambien se puede renombrar
const { pais: paisNacimiento } = persona;
console.log(paisNacimiento); // Argentina

// Spread {...}
const direccion = {
    ciudad: "Buenos Aires",
    pais: "Argentina"
};

// Combinar Objetos
const personaCompleta = { ...persona, ...direccion };

// Copiar un objeto
const copiaPersona = { ...persona };

// Arrays
const numeros = [1, 2, 3, 4, 5];

// Extraer valores por posicion
const [primero, segundo] = numeros