class Vehiculo {
    constructor(marca, modelo, año, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.color = color;
    }

    mostrarInfo() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}, Color: ${this.color}`);
    }
}

const vehiculos = [
    new Vehiculo('Toyota', 'Corolla', 2020, 'Rojo'),
    new Vehiculo('Honda', 'Civic', 2019, 'Azul'),
    new Vehiculo('Ford', 'Mustang', 2021, 'Gris'),
    new Vehiculo('Chevrolet', 'Camaro', 2018, 'Verde'),
    new Vehiculo('Tesla', 'Model 3', 2022, 'Blanco'),
    new Vehiculo('BMW', 'Serie 3', 2020, 'Negro'),
    new Vehiculo('Volkswagen', 'Jetta', 2022, 'Amarillo'),
    new Vehiculo('Kia', 'Forte', 2019, 'Naranja'),
    new Vehiculo('Maxda', '3', 2018, 'Morado'),
    new Vehiculo('Subaru', 'Impreza', 2021, 'Rosa'),
];

console.log(vehiculos)

vehiculos.forEach((vehiculo) => {
    if(vehiculo.año > 2018){
        vehiculo.mostrarInfo()
    }
})

function contarColores(colorComparado, lista){
    let contador = 0;
    lista.forEach((vehiculo) => {
        const {color} = vehiculo;
        if(color.toLowerCase() == colorComparado){
            contador++;
        }
    })
    console.log(contador);
}

contarColores("rojo", vehiculos)