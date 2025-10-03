# Node.JS – Clase 6: Asincronismo en JavaScript

---

## 📑 Índice

1. Asincronismo
   - Fundamentos del asincronismo
   - Manejo de promesas:
     - Callbacks
     - then, catch & finally
     - async & await
   - Fetch: consumiendo datos externos
2. Servidores Web
   - ¿Cómo funciona Internet?
   - Protocolo TCP/IP
   - Modelo Cliente/Servidor
   - Protocolo de comunicación
   - HTTP en profundidad
     - Métodos HTTP
     - Headers
     - Body
     - Códigos de estado
     - URI: URL + URN

---

## 🎯 Objetivos de la Clase

- Comprender qué es el asincronismo y su importancia en la programación moderna.
- Utilizar promesas con los métodos **then**, **catch** y **finally** para manejar tareas asíncronas.
- Aplicar **async** y **await** para simplificar y estructurar el manejo de promesas.
- Consumir datos externos utilizando la API **Fetch** con peticiones **GET** y **POST**.
- Manejar errores y procesar respuestas al interactuar con APIs externas.

---

## 🔑 Fundamentos del Asincronismo

El asincronismo es un **paradigma que permite ejecutar tareas en segundo plano sin bloquear el programa principal**.

### 🌟 Importancia
- Construye aplicaciones más eficientes y rápidas, mejorando la experiencia del usuario.

### 💻 JavaScript
- Lenguaje basado en eventos que utiliza **callbacks**, **promesas** y **async/await**.

### 🧵 Single Thread en JavaScript
- **Ejecución Secuencial:** JavaScript ejecuta tareas en una sola secuencia de comandos.
- **Event Loop:** Maneja la cola de tareas para ejecutar operaciones asincrónicas.
- **Call Stack:** Estructura que registra las funciones en ejecución.

---

## 🔄 Call Stack y Event Loop

### 📚 Call Stack
- Registra las funciones en ejecución.  
- Se agregan al llamarse y se eliminan al completarse.

### 🔁 Event Loop
- Maneja eventos y agrega callbacks a la cola.
- Ejecuta tareas cuando el Call Stack está vacío.

### 🗃️ Callback Queue
- **Almacenamiento:** Guarda funciones callback y resultados de tareas asincrónicas.
- **Ejecución:** El Event Loop ejecuta las funciones cuando el Call Stack está vacío.

💡 **Ejemplo:** Las consultas a APIs externas se manejan en la **Callback Queue**.

---

## ⚙️ Manejo de Promesas

### 🔸 Callbacks
- Es una función que se pasa como argumento a otra función.
- **Ejecución:** Se ejecuta cuando se completa la tarea asincrónica.

### 🔸 Objeto Promise
- Es un objeto que representa el resultado eventual de una tarea asincrónica.

#### Estados
- **Resolved:** Exitoso.
- **Rejected:** Erróneo.

#### Métodos
- `.then()` → Maneja resultados exitosos.
- `.catch()` → Maneja errores.
- `.finally()` → Se ejecuta al finalizar, sin importar el resultado.

#### 📝 Ejemplo de Promesa
```javascript
function taskAsync() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve("Tarea completada con éxito");
      } else {
        reject("La tarea falló");
      }
    }, 3000);
  });
}

taskAsync()
  .then(result => console.log(result))
  .catch(error => console.error(error))
  .finally(() => console.log("Operación finalizada"));
```

---

## ⏳ Async / Await

- **async:** Palabra clave para definir una función asincrónica.
- **await:** Espera la resolución de una promesa antes de continuar.
- **try/catch:** Bloque recomendado para manejar errores en funciones async.

#### 📝 Ejemplo
```javascript
async function fetchData() {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    console.log(data.results.slice(0, 5));
  } catch (error) {
    console.error("Error al obtener datos:", error);
  }
}

fetchData();
```

---

## 🌐 Fetch: consumiendo datos externos

### ⚡ API Fetch
- Es una **API nativa** para hacer solicitudes HTTP a servidores web.
- Devuelve una **promesa** con la respuesta HTTP.

### ✅ Ventajas
- Reemplaza `XMLHttpRequest`.
- Maneja respuestas con promesas.

### 🔸 Fetch vs Axios
- **Fetch:** Nativo, requiere configuración manual para algunas funcionalidades.
- **Axios:** Biblioteca externa con características integradas y manejo automático de errores.

---

## 🌍 Servidores Web

- Comunicación web y funcionamiento de servidores.
- **Patrones de Arquitectura:** cimientos de los proyectos de programación.
- **Creación de Servidor Web:** primeros pasos con Node.js.

---

## 📦 Materiales y Recursos Adicionales

- [Event Loop en Node JS – Documentación Oficial](https://nodejs.org/en/learn/asynchronous-work/event-loop)
- [Fetch API – MDN Web Docs](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)
- [Axios – GitHub Repository](https://github.com/axios/axios)

---

## 🏆 Ejercicio Práctico

### 📝 Storytelling
Matías y Sabrina están cada vez más interesados en tu progreso.  
“Es momento de adentrarte en el mundo real de las APIs”, dice Sabrina con una sonrisa desafiante.

> “Queremos ver cómo manejás datos externos y cómo aprovechás las herramientas de JavaScript para hacerlo de manera eficiente”.

Matías añade:  
> “Piensa en este ejercicio como una simulación. En proyectos reales, consumirás APIs externas todo el tiempo. Este desafío evaluará tu habilidad para hacerlo de manera estructurada y profesional”.

---

### 🚀 Misión 1 – Promesas (then / catch / finally)

- Utiliza la [API pública de Rick and Morty](https://rickandmortyapi.com/) para obtener la lista de personajes.
- Procesa la respuesta y **devuelve por consola un array con los primeros 5 resultados** de los 20 personajes recibidos.

---

### 🚀 Misión 2 – Async / Await

> “El enfoque con promesas es sólido, pero en muchos casos queremos trabajar de manera más legible y fluida. Aquí es donde entra async/await”.

- Realiza el mismo ejercicio anterior usando **async/await**.
- Maneja errores con un bloque **try/catch**.

Matías concluye:  
> “Queremos ver un código limpio, fácil de entender y bien estructurado. Si podés manejar ambas técnicas, será una señal de que estás preparado para enfrentar tareas reales en TechLab”.