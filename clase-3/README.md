# Node.js - Clase 3: Funciones, Arrays y Metodos en JavaScript

¡Bienvenido a la Clase 3 de nuestro curso de Node.js!  
En esta clase vamos a profundizar en **Funciones, Arrays, Metodos y Template Literals**, sentando bases solidas para escribir codigo claro, reutilizable y profesional.

---

## 📑 Indice

1. [Funciones](#funciones)  
   - Declaracion de funciones  
   - HOF: Higher Order Functions  
   - Parametros, argumentos y return  

2. [Arrays](#arrays)  
   - Declaracion  
   - Propiedades basicas  
   - Metodos mas utilizados (push, pop, map, filter, reduce, etc.)  
   - Iteracion de arrays  

3. [Template Literals](#template-literals)  
   - Definicion y sintaxis  
   - Interpolacion de variables  
   - Ventajas (multilinea, expresiones, legibilidad)  

4. [Objetos, Clases y Operadores Avanzados](#objetos-clases-y-operadores-avanzados)  
   - Objetos: definicion y tipos  
   - Clases: sugar syntax, constructor  
   - Operadores: destructuring, spread  

5. [Storytelling](#storytelling)  
   - Tu rol en TechLab  

6. [Ejercicios Practicos](#ejercicios-practicos)  
   - Calcular precios con IVA  
   - Mostrar salida con Template Literals  

7. [Recursos Adicionales](#recursos-adicionales)

---

## 🎯 Objetivos de la Clase

- Repasar **funciones** y sus distintos tipos en JavaScript.  
- Comprender el concepto y proposito de las **Higher Order Functions (HOF)**.  
- Aprender la estructura y metodos mas utiles de los **arrays**.  
- Manejar **template literals** para cadenas de texto dinamicas.  
- Conocer conceptos avanzados de **objetos, clases y operadores**.

---

## 🔧 Funciones

Las funciones son bloques de codigo reutilizables que encapsulan acciones especificas.  
Permiten organizar el codigo, evitar repeticiones y mejorar el mantenimiento.

**Tipos de funciones:**
- Declaradas (`function nombre() {}`)
- Expresadas (funciones anonimas asignadas a variables)
- Arrow Functions (sintaxis concisa introducida en ES6)

**Parametros y argumentos:**
- Parametros: variables definidas en la declaracion  
- Argumentos: valores pasados en la invocacion  

**Return:** define el valor que la funcion devuelve.  
Si no hay `return`, la funcion devuelve `undefined`.

**Higher Order Functions (HOF):**  
Son funciones que reciben otras funciones como parametro o las devuelven como resultado. Tambien llamadas *callbacks*.

---

## 🗂 Arrays

Los arrays son colecciones de datos que permiten agrupar valores relacionados en una misma variable.  
Los elementos se identifican con un **indice**, comenzando en `0`.

**Propiedades:**
- `array.length` → cantidad de elementos  
- `array[index]` → acceder a un elemento  

**Metodos importantes:**
- `push()` / `unshift()` → agregar al final / inicio  
- `pop()` / `shift()` → quitar del final / inicio  
- `join()` → unir en cadena  
- `map()` → transformar elementos  
- `filter()` → filtrar segun condicion  
- `reduce()` → reducir a un solo valor acumulado  

**Iteracion:**
- `forEach()` → ejecuta una funcion por cada elemento  
- `for...of` → recorrer elementos de forma simple  

---

## 💡 Template Literals

Sintaxis: usar **backticks** `` ` `` en lugar de comillas.  
Permiten interpolar variables con `${}` y escribir strings multilinea.

**Ejemplo:**

```js
const nombre = "Damian";
console.log(`Hola, ${nombre}! Bienvenido a Node.js`);
```

Ventajas:
- Mas legibles  
- Permiten multilinea  
- Aceptan expresiones y funciones directamente  

---

## 🏗 Objetos, Clases y Operadores Avanzados

**Objetos:**
- Agrupan datos y funcionalidades en una misma entidad.  

**Clases:**
- Introducidas como *syntactic sugar* de prototipos.  
- Incluyen `constructor` y metodos asociados.  

**Operadores avanzados:**
- **Destructuring**: extraer valores de objetos o arrays.  
- **Spread**: expandir elementos (`...`).  

---

## 📖 Storytelling

📌 **Situacion inicial en TechLab**  
¡Bienvenido a TechLab! Tenemos un proyecto emocionante: un cliente necesita una aplicacion backend robusta para gestionar su tienda online.  

Antes de unirte al equipo, deberas superar una serie de retos para demostrar tus habilidades.  

**Equipo TechLab:**
- Silvia → Product Owner  
- Luis → UX/UI Designer  
- Matias → Developer  
- Sabrina → Developer  

Tu desafio comienza aqui 🚀  

---

## 📝 Ejercicios Practicos

### Ejercicio 1 - Calcular precios con IVA

Crea un array con 10 precios y calcula el **IVA (21%)** usando un metodo de array (`map`).

```js
const precios = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
const preciosConIVA = precios.map(precio => precio * 1.21);

console.log(preciosConIVA);
```

---

### Ejercicio 2 - Mostrar salida con Template Literals

Muestra cada precio con formato profesional usando `forEach` y template literals:

```js
preciosConIVA.forEach(valor => {
  console.log(`El precio es: ${valor}.- IVA incluido.`);
});
```

---

## 📚 Recursos Adicionales

- [MDN Web Docs - Funciones](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions)  
- [MDN Web Docs - Arrays](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array)  
- [Eloquent JavaScript](https://eloquentjavascript.net/)  

---