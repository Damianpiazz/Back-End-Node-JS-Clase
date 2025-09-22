// Funcion declarada -> Mas comun de usar
function saludar() {
    console.log("Hola");
}

// Funcion expresada / anonima -> Menos usada
const despedir = function() {
    console.log("Adios");
}  

// Funcion flecha -> Eventos onClick
const preguntar = () => {
    console.log("Como estas?");
}

// Son todas de tipo Function y por defecto devuelven undefined

function sumar(a, b) { // Parametros
    const resultado = a + b; // Variable local
    return resultado;
}

// Higgher Order Functions (HOF) o Callbacks -> Funciones que reciben otras funciones como parametros o devuelven funciones

function calcularadora(a, b, operacion) {
    return operacion(a, b);
}

resultado_suma = calculadora(20,10, (a,b)=> a+b)
resultado_resta = calculadora(20,10, (a,b)=> a-b)

