let frutas = ['manzana', 'banana', 'pera', 'kiwi'];
const verduras = ['lechuga', 'tomate', 'cebolla'];

console.log(frutas);
// Leer elemento con el index
console.log(frutas[2]);
// Largo del array
console.log(frutas.length);

// Agrego elementos al final y al inicio del array
frutas.push('naranja');
frutas.unshift('frutilla');
console.log(frutas);

// Borrar elemento del final e inicio del array
frutas.pop();
frutas.shift();

// Metodos de transformacion para arrays
// Unir el array de frutas en un string separado por comas
const frutasEnTexto = frutas.join(', ');

// Pasar todas las frutas a mayusculas con .map
const frutasEnMayus = frutas.map((fruta) => fruta.toUpperCase());

// Frutas que tienen mas de 5 letras
const frutasLargas = frutas.filter((fruta) => fruta.length > 5);

// Concatenar frutas y verduras en un solo string
const todos = frutas.concat(verduras);
const listaReducida = todos.reduce((acum, item) => acum + ' | ' + item);

// Iteracion de arrays

// Mostrar cada fruta con forEach
frutas.forEach((fruta, index) => {
    console.log(`Fruta #${index + 1}: ${fruta}`);
});

// Mostrar cada verdura con for...of
for (const verdura of verduras) {
    console.log(`Verdura: ${verdura}`);
}