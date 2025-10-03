console.log("Hola Mundo");

const argumentos = process.argv.slice(2);
console.log(argumentos); // ['arg1', 'arg2', 'arg3']
const argumentos_sin_slice = process.argv;
console.log(argumentos_sin_slice); // ['node', 'path/to/script.js', 'arg1', 'arg2', 'arg3']

if(argumentos[0] == "GET"){
    console.log("Toma dato...");
}else if(argumentos[0] == "POST"){
    console.log(`Recibimos dato... ${argumentos[1]} satisfactoriamente`);
}else if(argumentos[0] == "PUT"){
    console.log(`actualizamos dato... ${argumentos[1]} satisfactoriamente`);
}else if(argumentos[0] == "DELETE"){
    console.log(`eliminamos dato... ${argumentos[1]} satisfactoriamente`);
}else{
    console.log("Comando no reconocido");
}