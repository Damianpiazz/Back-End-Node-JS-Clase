# Node.JS Clase 4: Objetos, Clases y Operadores Avanzados en JavaScript

---

## Índice
1. Objetos, clases y operadores avanzados  
   - Objetos: Definición / Características de los objetos / Tipos de objetos  
   - Clases: Sugar Syntax, similitud con objetos funcionales, método constructor  
   - Operadores avanzados: Destructuring operator, Spread operator  
2. Módulos y gestores de paquetes  
   - Gestores de paquetes: NPM - Instalación de paquetes, creación de scripts, gestión de dependencias  
   - Inicio de un proyecto nuevo con Node.js y NPM  
   - Módulos nativos  
   - Módulos de terceros  
   - Dirname: Gestión de rutas absolutas y acceso a archivos del servidor  

---

## Objetivos de la Clase
- **Comprender Objetos**: Aprenderemos a crear y manipular objetos literales y funcionales en JavaScript.  
- **Introducir Clases**: Exploraremos la sintaxis y uso de clases en JavaScript.  
- **Operadores Avanzados**: Estudiaremos el destructuring y spread operator para mejorar nuestro código.  

---

## Objetos

### Definición
Los objetos son variables especiales que contienen más variables en su interior.

### Estructura
Cada propiedad o elemento es un par **clave/valor** separado de otro a través de una coma.

### Ventaja
Excelente para crear colecciones con información relacionada e identificada por claves específicas.

### Características de los Objetos
- **Pares Clave/Valor**: Cada dato está asociado a una clave única llamada propiedad.  
- **Dinamismo**: Los objetos pueden expandirse o modificarse en tiempo de ejecución.  
- **Métodos**: Los objetos pueden incluir funciones como valor de sus propiedades.  

### Objetos Literales
- **Definición**: Se declaran asignando a una variable un par de llaves `{}` que contienen propiedades.  
- **Acceso**: Se accede a las propiedades usando el `.` (punto) o corchetes `['propiedad']`.  

### Objetos Funcionales
- Se declaran como una **función tradicional** en JavaScript, actuando como un molde para crear múltiples objetos.  
- **Función Constructora**: Utiliza la palabra reservada `this` para definir propiedades y métodos.  
- **Creación de Instancias**: Se usan con la palabra reservada `new` para crear nuevos objetos basados en el molde.  

---

## Clases en JavaScript

Las clases en JavaScript ofrecen una sintaxis más clara para la **programación orientada a objetos (POO)**.

### Definición de Clase
- Usa la palabra reservada `class` y el método `constructor()`.  
- **Herencia**: Permite extender clases con `extends`.  
- **Instanciación**: Crea objetos con `new`.  

### Programación Orientada a Objetos (POO)
JavaScript es un lenguaje **multiparadigma**, soporta programación imperativa, funcional y orientada a objetos.  
La POO se basa en la creación de **Clases** que definen propiedades y métodos que pueden ser heredados.  
Los objetos funcionales son una representación básica de lo que las clases pueden lograr.  

---

## Operadores Avanzados

### Destructuring Operator `{}`
Permite extraer valores de arrays o propiedades de objetos y asignarlos a variables.

- **Arrays**: Desempaqueta valores por posición.  
- **Objetos**: Extrae propiedades y las asigna a variables con el mismo nombre.  

### Spread Operator `...`
Permite copiar o combinar arrays y objetos.

- **En Arrays**: Combina o clona arrays sin modificar el original.  
- **En Objetos**: Copia o combina propiedades de varios objetos.  

---

## Próximos Pasos y Recursos

### Próximos Temas
- Módulos y librerías  
- Manejo de Promesas  
- Servidores Web  

### Recursos Adicionales
- Documentación [MDN sobre Objetos](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object)  
- Guía sobre funciones constructoras  
- Documentación sobre Clases en JavaScript  

---

## Ejercicio Práctico - Storytelling

Matías y Sabrina han preparado un nuevo reto para evaluar tus habilidades.

> “Imagina que estás organizando información sobre una flota de vehículos”, dice Sabrina.  
> “Queremos ver cómo manejas datos más estructurados”.  

### Misión 1
1. Crea un **array con 10 objetos**, donde cada objeto represente un automóvil con:  
   - Marca  
   - Modelo  
   - Año  
   - Color  
2. Usa un **método de array** para recorrer la lista e imprime por consola todos los datos de los automóviles cuyo año sea mayor a 2018.  

Matías añade:  
> “Queremos que veas esto como un ejercicio para prepararte para trabajar con datos reales en el futuro”.  

---

### Misión 2
Impresionados con tu avance, Matías y Sabrina suben un poco la dificultad.  

Sabrina te plantea:  
> “Queremos saber si puedes analizar la información de forma específica. Aquí tienes tu próximo desafío”.  

- Crea una **función** que recorra el array de automóviles.  
- Usa **destructuring** dentro de la función para obtener el color de cada automóvil.  
- La función debe aceptar un color como parámetro y devolver por consola **cuántos automóviles tienen ese color**.  

---