# Node.JS – Clase 8: Servidores Web y patrones de Arquitectura

---

## 📑 Índice

1. Servidores Web y patrones de Arquitectura
   - Servidores
   - ¿Qué es un servidor?
   - ¿Cómo funciona un servidor?
   - Tipos de Servidores
   - Servidores Web
   - Alojamiento y Hostings
   - Patrones de Arquitectura
   - MVC vs API Rest
2. Creando un Servidor Web
   - Servidor Web Node Nativo
   - Express JS
   - Middlewares

---

## 🎯 Objetivos de la Clase

- Definir y diferenciar entre un servidor de hardware y un servidor de software.  
- Entender cómo interactúan el hardware y el software para ofrecer servicios en la red.  
- Identificar y analizar los diferentes tipos de servidores.  
- Explicar cómo los servidores web procesan solicitudes HTTP.  
- Destacar la importancia del alojamiento y los servicios de hosting para el acceso global a sitios y aplicaciones.  
- Introducir patrones de arquitectura en sistemas modernos.  
- Abordar el concepto de MVC (Modelo-Vista-Controlador).  
- Explicar API Rest y sus características.  
- Contrastar los usos de MVC y API Rest en el diseño y desarrollo de sistemas modernos.

---

## 🌐 Servidores

### ¿Qué es un servidor?
El término servidor tiene dos significados:
1. Ordenador que pone recursos a disposición a través de una red.  
2. Programa que funciona en dicho ordenador.

#### Servidor de Hardware
Máquina física integrada en una red informática que ejecuta software de servidor.

#### Servidor de Software
Programa que ofrece servicios especiales a otros programas llamados clientes.

### Funcionamiento de un servidor
1. **Espera de solicitudes:** El servidor está en espera permanente de solicitudes de clientes.  
2. **Recepción de solicitud:** Un cliente envía una solicitud al servidor.  
3. **Procesamiento:** El servidor procesa la solicitud y prepara una respuesta.  
4. **Envío de respuesta:** El servidor envía la respuesta al cliente.

### Tipos de Servidores
- **Web:** Almacena, organiza y entrega páginas web a los navegadores.  
- **Archivos:** Almacena datos para acceso múltiple a través de una red.  
- **Correo Electrónico:** Maneja el envío, recepción y reenvío de correos electrónicos.  
- **Bases de datos:** Apache, Nginx y Microsoft IIS.  
- **Juegos:** Gestiona datos en juegos multijugador online.  
- **Proxy:** Actúa como intermediario entre cliente y otros servidores.  
- **DNS:** Traduce nombres de dominio en direcciones IP.

### Servidores Web Populares
- **Apache:** Software de código abierto, gratuito y compatible con múltiples plataformas.  
  - Desventaja: Rendimiento puede disminuir con miles de solicitudes simultáneas.  
- **Nginx:** Ligero, rápido y seguro, enfocado en alto rendimiento.  
  - Ventaja: Excelente manejo de tráfico elevado y conexiones simultáneas.  
- **LiteSpeed:** Diseñado para ofrecer alto rendimiento, especialmente con PHP.  
  - Versiones: gratuita de código abierto y comercial.  
- **Microsoft IIS:** Integración nativa con Windows y herramientas Microsoft.  
  - Popularidad: Preferido en entornos corporativos.

---

## 🏠 Alojamiento y Hostings

El hosting es un servicio de almacenamiento que hace que se pueda acceder a tu sitio web en Internet.  

Tipos de alojamiento:  
- **Servidor Dedicado:** Máximo control y recursos exclusivos.  
- **Servidor Virtual Privado (VPS):** Balance entre control y costo.  
- **Hosting Compartido:** Económico, recursos compartidos.

---

## 🏗️ Patrones de Arquitectura

Guías probadas para resolver problemas comunes de diseño en software.  

- Propósito: sistemas escalables, mantenibles y robustos.  
- Flexibilidad: enfoques generales adaptables.  

Tipos de patrones:  
- **Monolito:** Todas las funcionalidades en una única unidad.  
- **Capas:** División en capas con responsabilidades específicas.  
- **Basados en eventos:** Centrados en intercambio de mensajes entre componentes.  
- **Microservicios:** Aplicación dividida en servicios pequeños e independientes.

---

## ⚖️ MVC vs API Rest

### MVC (Modelo-Vista-Controlador)
- Genera HTML y CSS en el servidor.  
- Componentes:  
  - **Modelo:** Gestiona datos y lógica de negocio.  
  - **Vista:** Representa la interfaz de usuario.  
  - **Controlador:** Intermediario entre Modelo y Vista.

### API Rest (Representational State Transfer)
- Proporciona datos en formato JSON.  
- Separa completamente frontend y backend.  
- Componentes:  
  - **Recursos:** Expuestos a través de URLs específicas.  
  - **Métodos HTTP:** GET, POST, PUT, DELETE.  
  - **Formato de datos:** JSON.

---

## 📚 Materiales y Recursos Adicionales

- [Introducción a las API REST](https://restfulapi.net/)  
- [Documentación sobre patrones de arquitectura (Martin Fowler)](https://martinfowler.com/articles/enterpriseArch.html)  
- Entornos para probar API REST: [Postman](https://www.postman.com/) y [Insomnia](https://insomnia.rest/)