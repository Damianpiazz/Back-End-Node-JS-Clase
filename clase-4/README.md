# Node.js - Clase 4: Objetos, Clases y Operadores Avanzados en JavaScript

¡Bienvenido a la Clase 4 de nuestro curso de Node.js!  
En esta clase vamos a profundizar en **Objetos, Clases, Operadores Avanzados y módulos**, sentando bases solidas para organizar y manipular datos complejos en JavaScript.

---

## 📑 Indice

1. [Objetos](#objetos)  
   - Definición y caracteristicas  
   - Objetos literales y funcionales  
   - Funciones constructoras  
   - Creación de instancias  

2. [Clases](#clases)  
   - Definición y sugar syntax  
   - Constructor y herencia  
   - Instanciación de objetos  
   - Programación orientada a objetos (POO)  

3. [Operadores Avanzados](#operadores-avanzados)  
   - Destructuring operator  
   - Spread operator  
   - Uso en arrays y objetos  

4. [Módulos y gestores de paquetes](#modulos-y-gestores-de-paquetes)  
   - NPM: instalación, scripts y dependencias  
   - Inicio de proyecto nuevo  
   - Módulos nativos y de terceros  
   - Gestión de rutas con __dirname  

5. [Ejercicios Practicos](#ejercicios-practicos)  
   - Misión 1: Array de automóviles  
   - Misión 2: Función con destructuring y filtrado por color  

6. [Recursos Adicionales](#recursos-adicionales)  
   - Documentación MDN y guías sobre objetos y clases  

---

## 🎯 Objetivos de la Clase

- Comprender y manipular objetos literales y funcionales.  
- Introducir clases y su sintaxis en JavaScript.  
- Aplicar destructuring y spread operator para mejorar el código.  
- Entender la gestión de módulos y paquetes en Node.js.

---

## 🗂 Objetos

Los objetos son variables especiales que contienen otras variables como propiedades (clave/valor).  
Permiten organizar datos relacionados y métodos dentro de la misma estructura.

**Características:**
- Pares clave/valor únicos  
- Dinamismo: se pueden modificar y expandir en tiempo de ejecución  
- Métodos: funciones asociadas como propiedades  

**Tipos de objetos:**
- Literales: `{ clave: valor }`  
- Funcionales / Constructoras: definidas como funciones para crear múltiples objetos  

**Creación de instancias:** se usa `new` con funciones constructoras o clases.

---

## 🏗 Clases

Las clases en JavaScript ofrecen una sintaxis más clara para POO.  
Incluyen el `constructor()` y permiten herencia con `extends`.

```js
class Auto {
  constructor(marca, modelo, año, color){
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.color = color;
  }
}
const auto1 = new Auto('Toyota', 'Corolla', 2020, 'Rojo');
```

POO permite definir **propiedades y métodos** y crear subclases que heredan comportamientos.

---

## 💡 Operadores Avanzados

**Destructuring**: extrae valores de arrays u objetos asignándolos a variables:

```js
const { color, marca } = auto1;
```

**Spread operator**: combina o copia arrays y objetos sin modificar el original:

```js
const autosNuevos = [...autosExistentes];
const autoClonado = {...auto1};
```

---

## 📦 Módulos y gestores de paquetes

**NPM (Node Package Manager):**  
- Instalar paquetes: `npm install paquete`  
- Crear scripts: `"start": "node index.js"` en package.json  
- Gestionar dependencias y versiones  

**Módulos:**  
- Nativos: `fs`, `path`, `http`  
- De terceros: instalados con NPM  
- `__dirname` para rutas absolutas y manejo de archivos del servidor

---

## 📝 Ejercicios Practicos

### Misión 1 - Array de automóviles

Crear un array de 10 objetos `autos`, con propiedades: `marca`, `modelo`, `año`, `color`.  
Recorrerlo e imprimir por consola los autos cuyo año sea mayor a 2018.

```js
const autos = [
  {marca:'Toyota', modelo:'Corolla', año:2019, color:'Rojo'},
  {marca:'Ford', modelo:'Fiesta', año:2017, color:'Azul'},
  // ...8 autos mas
];

autos.filter(auto => auto.año > 2018).forEach(auto => console.log(auto));
```

### Misión 2 - Función con destructuring y filtrado por color

Crear una función que recorra el array, use destructuring para obtener el color, y devuelva cuántos autos tienen un color específico:

```js
function contarPorColor(autos, colorBuscado){
  let count = 0;
  autos.forEach(({color}) => { if(color === colorBuscado) count++; });
  console.log(`Cantidad de autos color ${colorBuscado}: ${count}`);
}
contarPorColor(autos, 'Rojo');
```

---

## 📚 Recursos Adicionales

- [MDN Web Docs - Objetos](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Working_with_Objects)  
- [Guía funciones constructoras](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes)  
- [Documentación sobre Clases en JS](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes)  

---