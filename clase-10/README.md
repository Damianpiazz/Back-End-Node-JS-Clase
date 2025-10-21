# Clase N° 10: Modelando una API Rest

## Índice

-   Modelando una API Rest
-   API Rest
-   Estructura de archivos
-   Capas de la aplicación
-   División de responsabilidades
-   REQUEST & RESPONSE
-   Rutas
-   CORS: solicitudes entre dominios
-   Error Handle (404)
-   Rutas parametrizadas
-   POSTMAN

------------------------------------------------------------------------

## Objetivos de la Clase

-   Comprender los fundamentos de una API Rest\
-   Poder aplicarlo al proyecto final\
-   Estructura de archivos\
-   Veremos como organizar el código de manera eficiente\
-   División de responsabilidades\
-   Fomentando el uso de principios de diseño que aseguren un desarrollo
    más ordenado y modular.

------------------------------------------------------------------------

## API Rest

### ¿Qué es una API Rest?

Es una arquitectura o metodología de software que propone la
comunicación entre sistemas mediante HTTP y JSON.

### Recursos

Trabaja con datos accesibles mediante URLs únicas.

### Métodos

Usa **GET**, **POST**, **PUT** y **DELETE** para interactuar con
recursos.

### Características Clave de REST

#### Sin Estado

Cada interacción es independiente, facilitando el manejo de múltiples
solicitudes.

#### Formato JSON

Datos enviados en formato fácil de leer para computadoras y
desarrolladores.

#### Interoperabilidad

Permite que sistemas con diferentes tecnologías se comuniquen
eficazmente.

------------------------------------------------------------------------

## Estructura de archivos

### Importancia de la Estructura

En el desarrollo de software es importante tomar algunas decisiones
antes de comenzar a trabajar en el código.\
Una buena estructura debe adaptarse al tamaño del proyecto. Si es algo
pequeño, podemos empezar con algo básico, como un par de carpetas y
archivos.

En esta oportunidad aprenderemos una estructura basada en capas, simple
y escalable para API Rest desarrolladas en Node junto con Express.

### Organización

-   **Facilita encontrar y mantener el código.**
-   **Escalabilidad:** Permite crecer el proyecto de manera ordenada.
-   **Colaboración:** Mejora el trabajo en equipo al tener roles claros.

### Estructura de Archivos

    src/
     ├── routes/         # Configuración de rutas de la API
     ├── controllers/    # Manejo de solicitudes y respuestas
     ├── models/         # Definición de datos y conexión con base de datos
     └── services/       # Lógica de negocio principal

------------------------------------------------------------------------

## Capas de la aplicación

Cuando hablamos de las **capas de una aplicación**, nos referimos a cómo
dividimos las responsabilidades dentro del sistema para que cada parte
se encargue de algo específico.

> Es como construir una casa: cada piso tiene un propósito diferente, y
> eso hace que todo funcione de manera más ordenada y eficiente.

En el caso de una API Rest, dividirla en capas nos ayuda a manejar mejor
el código, hacer cambios sin romper todo y trabajar en equipo más
fácilmente.

------------------------------------------------------------------------

## Rutas

Las **rutas** son los "puntos de entrada" (endpoints) que los clientes
usan para interactuar con nuestra aplicación.\
Cada ruta define qué se puede hacer con un recurso específico.

Ejemplo: - `/users` para listar todos los usuarios. - `/users/:id` para
obtener un usuario. - `/users` (POST) para crear un usuario.

### Métodos Comunes

-   **GET:** Obtener información (listar usuarios).\
-   **POST:** Crear algo nuevo (registrar usuario).\
-   **PUT / PATCH:** Actualizar información.\
-   **DELETE:** Eliminar recursos.

------------------------------------------------------------------------

## Capas de la Aplicación: Controladores

Los **controladores** son responsables de conectar las rutas con la
lógica de negocio y manejar las respuestas.

> Imagina que la API es un restaurante: las rutas son los meseros que
> toman los pedidos, y los controladores son los chefs que preparan y
> entregan los platos.

### Responsabilidades

-   **Reciben solicitudes**
-   **Coordinan acciones**
-   **Manejan respuestas**

### Ejemplo de Controlador

``` js
function getAllUsers(req, res) {
  res.json([{ name: "Juan" }, { name: "María" }]);
}
```

------------------------------------------------------------------------

## Capas de la Aplicación: Modelos

Los **modelos** describen la estructura de los datos y su interacción
con la base de datos.

Ejemplo en MongoDB:

``` js
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});
```

> En este curso no usaremos bases de datos tradicionales. La capa de
> modelos nos servirá para interactuar con la información.

------------------------------------------------------------------------

## Capas de la Aplicación: Servicios

Los **servicios** manejan la lógica de negocio. Actúan como los motores
de la aplicación.

``` js
async function addNewProduct(productData) {
  if (!productData.name || !productData.price) {
    throw new Error('El nombre y el precio son obligatorios.');
  }
  return await productModel.createProduct(productData);
}
```

------------------------------------------------------------------------

## División de Responsabilidades

### Planificación estructurada

-   Diseña la estructura antes de comenzar.
-   Cada capa debe tener un propósito claro.
-   Evita concentrar todo el código en un único archivo.

### Uso de módulos

-   Exporta e importa partes del código de forma ordenada.
-   Garantiza control granular.

### Beneficios

-   Aplicaciones fáciles de mantener.
-   Escalabilidad y evolución eficiente.
-   Arquitectura modular y robusta.

------------------------------------------------------------------------

## Beneficios de la Arquitectura en Capas

-   **Modularidad:** Facilita pruebas y mantenimiento.\
-   **Reutilización:** Usa el mismo código en diferentes partes.\
-   **Flexibilidad:** Adaptación a nuevos requisitos.

------------------------------------------------------------------------

## Conclusiones y Próximos Pasos

### Práctica

Aplica estos conceptos en tu próximo proyecto de API.

### Profundización

Explora temas como Request y Response, y trabajo con JSON.

### Evolución

Mantente actualizado con las mejores prácticas en desarrollo de APIs.

------------------------------------------------------------------------

## Materiales y Recursos Adicionales

-   **Guía de Arquitectura REST:** Principios básicos de REST.
-   **Tutorial Express + Node.js:** Desde un servidor básico hasta
    controladores y modelos.

------------------------------------------------------------------------

## Ejercicio Práctico (Obligatorio)

### Misión

1.  Crea la estructura de directorios para tu aplicación con rutas,
    controladores, modelos y servicios.\
2.  En tu archivo principal (`index.js`), define dos rutas nuevas:
    -   Una que devuelva una respuesta **HTML** (una página de
        bienvenida).\
    -   Otra que devuelva una respuesta **JSON** (una lista de usuarios
        o productos ficticios).

> No es necesario mover las rutas a la carpeta `routes` todavía.\
> Define las rutas directamente en el archivo principal.
