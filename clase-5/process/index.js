const argumentos = process.argv.slice(2);
console.log(argumentos); // ['arg1', 'arg2', 'arg3']

const argumentos_sin_slice = process.argv;
console.log(argumentos_sin_slice); // ['node', 'path/to/script.js', 'arg1', 'arg2', 'arg3']

if(argumentos[0] == "saludar"){
    console.log("Hola!", argumentos[1]);
}else if(argumentos[0] == "despedir"){
    console.log("Adios!", argumentos[1]);
}else{
    console.log("Comando no reconocido");
}