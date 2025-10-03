# Node.JS

## Clase 5: Modulos y Gestores de Paquetes en Node.js

¡Les damos la bienvenida! 

Vamos a comenzar a grabar la clase.

## Indice

- Modulos y gestores de paquetes
- Gestores de paquetes: 
- NPM - Node Package Manager:
- Instalacion de paquetes
- Creacion de scripts
- Gestion de dependencias.
- Inicio de un proyecto nuevo con Node Js y NPM
- Modulos Nativos
- Modulos de terceros
- Dirname: Gestion de rutas absolutas y acceso a archivos del servidor
- Asincronismo
- Fundamentos del asincronismo
- Manejo de promesas:
  - callbacks
  - then, catch & finally
  - async & await
- Fetch: consumiendo datos externos

## Objetivos de la Clase

- Comprender que son los gestores de paquetes y como utilizarlos en proyectos con Node.js.
- Aprender a iniciar y configurar un proyecto con Node.js y NPM, incluyendo la instalacion de dependencias y la creacion de scripts.
- Explorar los modulos nativos path, fs y process para manejar rutas, archivos y procesos.
- Implementar modulos de terceros en un proyecto utilizando NPM.
- Manejar rutas absolutas y relativas con __dirname para acceder a archivos del servidor.

## Gestores de paquetes

### Que son los Gestores de Paquetes?
- Biblioteca de Modulos
- Facilitan la instalacion y gestion de bibliotecas de codigo.

### Gestion de Dependencias
- Manejan versiones y resuelven conflictos entre paquetes.

### Automatizacion
- Simplifican la integracion de codigo de terceros en proyectos.

### Gestores de Paquetes Populares
- **NPM**: Node Package Manager o el gestor de paquetes mas utilizado para Node.js.
- **Homebrew**: Popular en sistemas Mac OS para gestion de programas.
- **Composer**: Utilizado en proyectos de PHP para manejar dependencias.
- **Pip**: Gestor de paquetes para el lenguaje Python.
- **Chocolatey**: El gestor de paquetes del sistema operativo Microsoft nos permite instalar infinidad de programas desde la terminal sin tener que descargar los ejecutables.

## NPM: Node Package Manager

### Gestion de Paquetes
- Instala, actualiza y elimina dependencias de forma sencilla.

### Configuracion de Proyectos
- Inicializa proyectos Node.js y crea archivos de configuracion.

### Scripts Personalizados
- Permite definir y ejecutar scripts de proyecto desde la terminal.

### Iniciando un Proyecto con NPM
- **Verificar Instalacion**: Comprueba la instalacion de Node.js y NPM con 'node -v' y 'npm -v'.
- **Crear Directorio**: Crea una nueva carpeta para tu proyecto.
- **Inicializar Proyecto**: Ejecuta 'npm init' o 'npm init -y' para configuracion rapida.

## Package.json: El Corazon del Proyecto 

### Metadatos del Proyecto
- Contiene nombre, version, descripcion y autor del proyecto.

### Dependencias
- Lista las dependencias de produccion y desarrollo del proyecto.

### Scripts
- Define comandos personalizados para ejecutar tareas del proyecto.

### Instalacion y Gestion de Paquetes
- Usa `npm install [paquete]` para agregar dependencias.
- Ejecuta `npm update [paquete]` para obtener la ultima version.
- Elimina paquetes con `npm uninstall [paquete]`.

### Creacion de Scripts Personalizados
- **Definir Scripts**: Agrega scripts personalizados en la seccion "scripts" del package.json.
- **Ejecutar Scripts**: Usa 'npm run [nombre-del-script]' para ejecutar tus scripts personalizados.
- **Automatizacion**: Crea scripts para tareas repetitivas como iniciar el servidor o compilar codigo.

## Modulos

### Modulos en Node.js
Los modulos son bloques de codigo reutilizables y organizados que encapsulan la funcionalidad de una aplicacion. 

### Tipos de Modulos
- **Modulos Internos**: Archivos de tu proyecto que exportan codigo.
- **Modulos Nativos**: Incluidos en Node.js, como 'fs' y 'http'.
- **Modulos Externos**: Paquetes de terceros instalados via NPM.

### CommonJS vs ES Modules
- **CommonJS**: Utiliza 'require()' y 'module.exports'. Es sincrono y compatible con Node.js.
- **ES Modules**: Usa 'import' y 'export'. Es asincrono y estandar en JavaScript moderno.

## Dirname

### __dirname y Rutas Absolutas
- `__dirname` proporciona la ruta absoluta del directorio actual.

### Uso en CommonJS
Disponible globalmente en modulos CommonJS.

### Alternativa en ES Modules
Usa 'import.meta.url' con 'url.fileURLToPath()' para obtener la ruta.

### Trabajando con Rutas en Node.js
- **Obtener Ruta Actual**: Usa __dirname o import.meta.url segun el sistema de modulos.
- **Combinar Rutas**: Utiliza path.join() del modulo path para crear rutas absolutas confiables.
- **Acceder a Archivos**: Usa fs.readFile() con la ruta absoluta para leer archivos.

## Process y Argumentos de Linea de Comandos

El modulo process es uno de los modulos nativos mas importantes de Node.js, ya que permite interactuar con el proceso en ejecucion. 

### Estructura
Incluye ruta de Node.js, ruta del script y argumentos adicionales.

### Uso
Permite crear scripts interactivos que respondan a diferentes argumentos.

## Proximos Pasos y Recursos

- **Manejo de Promesas**: Exploraremos como manejar procesos asincronos utilizando promesas y async/await en JavaScript.
- **Servidores Web**: Aprenderemos sobre la comunicacion web y como funcionan los servidores que dan vida a internet.
- **Patrones de Arquitectura**: Conoceremos sobre los cimientos de los proyectos de programacion.

## Ejercicios Practicos

### Storytelling
Matias y Sabrina te observan mientras revisas tus ultimos desafios resueltos. “Es momento de subir el nivel”, dice Matias, mientras Sabrina asiente.

“Queremos que configures un entorno de proyecto mas profesional, algo que sera clave si llegas a trabajar con nosotros en un futuro. Aqui tienes el siguiente reto”.

### Ejercicio Practico Obligatorio - Mision 1
Crea un nuevo proyecto en Node Js mediante el comando `npm init -y` y configura un nuevo script dentro del archivo package.json que mediante la instruccion `npm run start` ejecute el codigo de nuestro archivo script.js de forma automatica.

### Ejercicio Practico Obligatorio - Mision 2
- Si el comando es GET, imprime por consola el mensaje: "Toma un dato".
- Si el comando es POST {data}, imprime: "Recibimos {data} satisfactoriamente".
- Si el comando es PUT {id}, imprime: "Modificamos el item con id: {id} satisfactoriamente".
- Si el comando es DELETE {id}, imprime: "El item con el id: {id} se elimino con exito".
