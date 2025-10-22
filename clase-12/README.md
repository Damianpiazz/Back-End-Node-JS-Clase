# Node.JS - Clase N° 12: Capa lógica

---

## Índice

- Capa lógica  
- Express Router  
- Controladores  
- Servicios  
- Arquitectura basada en capas  
- Modelo de datos y trabajo con JSON  
- JSON  
- Parse  
- Stringify  
- Filesystem  
- Modelos  

---

## Objetivos de la Clase

### Express Router
- Modularizar las rutas de la aplicación para una gestión más clara y ordenada.

### Controladores
- Separar la lógica de recepción de solicitudes y coordinación de respuestas.

### Servicios
- Encapsular la lógica de negocio reutilizable, promoviendo un código limpio y modular.

### Arquitectura en capas
- Comprender cómo esta estructura facilita el manejo de la lógica de la aplicación.

---

Aprenderemos a estructurar aplicaciones web robustas con Node.js y Express, enfocándonos en la organización del código para un mantenimiento y escalabilidad eficientes.

---

## Express Router

### ¿Por qué usar Express Router?
### ¿Cómo funciona Express Router?

### ¿Qué es?
Un middleware de Express.js que permite crear manejadores de rutas modulares y montables.

### Función
Agrupa rutas en diferentes archivos o módulos, facilitando la escalabilidad y organización del código.

### Ventajas de Express Router

- **Organización**: Facilita la organización del código al separar las rutas en módulos lógicos.
- **Reutilización**: Permite reutilizar conjuntos de rutas en diferentes partes de la aplicación.
- **Mantenibilidad**: Mejora la mantenibilidad al aislar la lógica de cada conjunto de rutas.
- **Legibilidad**: Aumenta la legibilidad del código al dividirlo en partes más pequeñas y manejables.

---

## Ejemplo de Express Router

### index.js

```js
import express from 'express';
import cors from 'cors';

const app = express();

// Configuración básica: Permitir todos los orígenes
app.use(cors());

// Aquí irían las rutas

// Middleware para manejar errores 404
app.use((req, res, next) => {
    res.status(404).send('Recurso no encontrado');
});

const PORT = 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
```

### products.routes.js

```js
import express from 'express';
const router = express.Router();

router.get('/products', (req, res) => {
  res.send('Listado de productos');
});

export default router;
```

### Vinculación en el archivo principal

```js
import productsRouter from './routes/products.routes.js';
app.use('/api', productsRouter);
```

---

## Controladores

### ¿Cuál es la función de un Controlador?

Los controladores en Express son la capa que gestiona las solicitudes HTTP que llegan a los diferentes endpoints.

**Funciones principales:**  
- Recibir solicitudes.  
- Procesar la solicitud y realizar validaciones.  
- Interactuar con el modelo o servicio.  
- Generar y enviar la respuesta al cliente.

### Ejemplo de Controlador

```js
// products.controller.js
export const getAllProducts = async (req, res) => {
  res.status(200).json(products);
};

export const getProductById = async (req, res) => {
  const id = req.params.id;
  const product = products.find(product => product.id == id);
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: 'Producto no encontrado' });
  }
};
```

---

## Servicios

### ¿Cuál es la función de un Servicio?

Los servicios encapsulan la **lógica de negocio** de la aplicación.  
Actúan como intermediarios entre los controladores y los modelos o fuentes de datos.

**Funciones de un Servicio:**
- Encapsular lógica de negocio.
- Abstraer acceso a datos.
- Reutilizar lógica.

### Ejemplo de Servicio

```js
// products.service.js
const products = [
  { id: 1, name: 'Producto 1', price: 1000 },
  { id: 2, name: 'Producto 2', price: 2000 },
];

export const getAllProducts = () => {
  return products;
};

export const getProductById = async (id) => {
  return products.find(product => product.id == id);
};
```

---

## Arquitectura basada en capas

### Capas

- **Rutas**: Define los endpoints de la API.  
- **Controladores**: Maneja solicitudes y respuestas.  
- **Servicios**: Encapsula lógica de negocio.  
- **Modelos/Datos**: Representa y gestiona los datos.

### Ventajas

- **Separación de responsabilidades.**
- **Modularidad.**
- **Escalabilidad.**
- **Reutilización.**

---

## Ejercicio Práctico - Obligatorio

### Organización de Rutas y Capas en tu API

Sabrina y Matías se acercan a revisar tu progreso.  
Matías sonríe con aprobación:

> "Has avanzado muchísimo, pero ahora es momento de subir un nivel. Necesitamos que configures la capa de rutas de manera profesional."

Matías, con una expresión confiada, te dice:

> "Es hora de que trabajes como un verdadero desarrollador profesional. Sabemos que manejar rutas en el archivo principal está bien para comenzar, pero si tu aplicación crece, esa organización será insostenible."

Sabrina da un paso adelante y añade:

> "Por eso, queremos que trabajes con Express Router para separar tus rutas en módulos, que crees controladores para manejar la lógica y que comiences a trabajar con una capa de servicios para preparar datos simulados que luego enviarás a través de tus rutas."

---

### Misión

#### 1️⃣ Crear rutas organizadas con Express Router

- Migra las rutas de tu archivo principal a archivos separados en una carpeta llamada `routes`  
  Por ejemplo: `products.routes.js`  
- Usa `Express Router` para configurar el o los archivos de rutas.  
- Asegúrate de exportarlos correctamente para integrarlos en el archivo principal.

#### 2️⃣ Implementar controladores para manejar la lógica

- Crea un archivo llamado `product.controller.js` dentro de la carpeta `controllers`.  
- Implementa los controladores necesarios para responder a las rutas definidas.  
- Mueve la lógica de las rutas al controlador correspondiente y asegúrate de que las funciones sean claras y reutilizables.

#### 3️⃣ Añadir una capa de servicios con datos simulados

- Crea un archivo llamado `product.service.js` dentro de la carpeta `services`.  
- Simula datos en formato JSON, como una lista de productos o usuarios.  
- Utiliza estas funciones en los controladores para devolver respuestas dinámicas.

---

### Ejemplo práctico

**Flujo del ejercicio:**

1. **Archivo `productRoutes.js` (en la carpeta routes)**  
   Define las rutas principales y vincúlalas a las funciones del controlador.

2. **Archivo `productController.js` (en la carpeta controllers)**  
   Implementa la lógica de cada ruta, como obtener productos o filtrar por categoría.

3. **Archivo `productService.js` (en la carpeta services)**  
   Crea funciones que devuelvan datos simulados para que puedan ser utilizados en el controlador.

---

### 🧪 Prueba con POSTMAN

Usa **POSTMAN** para asegurarte de que las rutas, controladores y servicios estén funcionando correctamente.  
Este ejercicio es crucial para consolidar lo que has aprendido.  

Cuando termines, tendrás una base sólida para cualquier proyecto que emprendas.

> **¡Buena suerte y a programar como un profesional! 💪**
