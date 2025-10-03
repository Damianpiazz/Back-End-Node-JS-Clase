# Pre-Entrega de Proyecto

## 🔹 Introducción

"Hemos llegado al momento clave. Es hora de demostrar si estás preparado para dar el siguiente paso y unirte a nuestro equipo en TechLab”.

“Tu desafío es integrar todo lo aprendido en un único programa. Queremos ver cómo manejas estructuras, APIs y lógica dinámica. El objetivo es construir una herramienta funcional para manejar productos de una tienda en línea desde la terminal. ¿Estás listo para el reto?”

---

## 📌 Requerimientos del Proyecto

### Requerimiento #1: Configuración Inicial

1. Crea un directorio donde alojarás tu proyecto e incluye un archivo `index.js` como punto de entrada.
2. Inicia Node.js y configura npm usando el comando:
   ```bash
   npm init -y
   ```
3. Agrega la propiedad `"type": "module"` en el archivo `package.json` para habilitar ESModules.
4. Configura un script llamado `start` para ejecutar el programa con:
   ```bash
   npm run start
   ```

> Sabrina señala: “Este será el corazón de tu proyecto. Queremos un entorno limpio y profesional, como si estuvieras trabajando en un proyecto real”.

---

### Requerimiento #2: Lógica de Gestión de Productos

Con la base del proyecto lista, implementa las funcionalidades principales usando la API **FakeStore**. El sistema debe interpretar comandos ingresados en la terminal y ejecutar las siguientes acciones:

#### 1. Consultar Todos los Productos
Ejecuta:
```bash
npm run start GET products
```
El programa debe realizar una petición asíncrona a la API y devolver la lista completa de productos en la consola.

#### 2. Consultar un Producto Específico
Ejecuta:
```bash
npm run start GET products/<productId>
```
El programa debe obtener y mostrar el producto correspondiente al `productId` indicado.

Ejemplo:
```bash
npm run start GET products/15
```

#### 3. Crear un Producto Nuevo
Ejecuta:
```bash
npm run start POST products <title> <price> <category>
```
El programa debe enviar una petición `POST` a la API para agregar un nuevo producto con los datos proporcionados (`title`, `price`, `category`) y devolver el resultado en la consola.

Ejemplo:
```bash
npm run start POST products T-Shirt-Rex 300 remeras
```

#### 4. Eliminar un Producto
Ejecuta:
```bash
npm run start DELETE products/<productId>
```
El programa debe enviar una petición `DELETE` para eliminar el producto correspondiente al `productId` y devolver la respuesta en la consola.

Ejemplo:
```bash
npm run start DELETE products/7
```

---

## 💡 Tips de Desarrollo

- Usa `process.argv` para capturar y procesar los comandos ingresados.
- Implementa `fetch` para interactuar con la API de FakeStore (consulta su documentación).
- Aprovecha destructuring y spread para manipular datos.
- Utiliza métodos de arrays y strings para separar cadenas de texto y aprovechar solo la información necesaria.

---

## ✅ Conclusión

Matías finaliza: “Este desafío no solo mide tus habilidades técnicas, sino también tu capacidad para organizarte, resolver problemas y crear soluciones escalables. Si logras superar este reto, estaremos más que seguros de que estás listo para unirte a TechLab”.  