# Node.JS – Clase 7: Cómo funciona la web

---

## 📑 Índice

1. ¿Cómo funciona la web?
2. ¿Cómo funciona Internet?
3. Protocolo TCP/IP
4. Modelo Cliente/Servidor
5. Protocolo de comunicación
6. HTTP en profundidad
   - Métodos HTTP
   - Headers HTTP
   - Códigos de estado
   - URI: URL + URN
7. Servidores Web y Patrones de Arquitectura
   - Servidores
   - Patrones de Arquitectura
   - MVC vs API Rest

---

## 🎯 Objetivos de la Clase

- Comprender el modelo cliente-servidor.
- Entender el concepto de cliente-servidor y su importancia en la arquitectura de Internet.
- Analizar la comunicación en redes utilizando protocolos estándar.
- Analizar el funcionamiento del protocolo TCP/IP y su rol en la transferencia de datos.
- Diferenciar HTTP y HTTPS, y comprender las características principales de HTTP.
- Descomponer las partes de una URI y diferenciar entre URL y URN.

---

## 🌐 ¿Cómo funciona Internet?

- **Red de redes:** conecta dispositivos globalmente.  
- **Idioma común:** utiliza TCP/IP como estándar de comunicación.  
- **Interconexión global:** todos los dispositivos interconectados a nivel mundial.

### Protocolo TCP/IP

- **IP (Internet Protocol):** define la dirección del destino.  
- **TCP (Transmission Control Protocol):** asegura que los datos lleguen completos y en orden.

**Capas del Protocolo TCP/IP:**
1. Application Layer → Genera información y requiere conexiones.
2. Transport Layer → Maneja envío y recepción de datos.
3. Internet Layer → Define direcciones y rutas de datos.
4. Network Access Layer → Conexión física (WiFi o Ethernet).

### Modelo Cliente/Servidor

- **Cliente:** solicita servicios o datos (ej. navegador web).  
- **Servidor:** responde a solicitudes y proporciona recursos.  
- **Interacción:** intercambio de información y recursos.

### Protocolo de comunicación HTTP

- **Lenguaje común:** estándar para intercambiar información en la web.  
- **Sin estado:** no guarda información de conexiones anteriores.  
- **Cookies:** mantienen estado en aplicaciones web.

**Componentes clave de HTTP:**

- **Métodos HTTP:** GET, POST, PUT, DELETE  
- **URLs:** identifican recursos de manera única  
- **Cabeceras (Headers):** metadata de solicitud/respuesta  
- **Cuerpo (Body):** contenido enviado en solicitudes o respuestas

### HTTP Seguro (HTTPS)

- **Encriptación:** protege datos transmitidos.  
- **Certificado digital:** verifica identidad del sitio y cifra información.  
- **Privacidad:** evita interceptación por terceros.  
- **Certificados SSL/TLS:** verifican identidad y protegen la información.

### HTTP en profundidad

- **Métodos HTTP:** GET, POST, PUT, DELETE  
- **Headers HTTP:** User-Agent, Accept, Authorization, Cookie, Content-Type, Set-Cookie, Cache-Control, Content-Length, Connection, Date, Transfer-Encoding, Upgrade, Access-Control-Allow-Origin, Strict-Transport-Security, X-Content-Type-Options, Content-Security-Policy  
- **Códigos de estado:** 200 OK, 404 Not Found, 500 Internal Server Error  
- **URI:** combinación de URL y URN

**Ejemplos:**  
- URL: https://www.ejemplo.com  
- URN: /articulos?categoria=tecnologia  
- URI: combinación de URL y URN

---

## ✅ Conclusión

- **Fundamentos web:** esenciales para el desarrollo web moderno.  
- **Comunicación eficiente:** protocolos y estándares permiten una web funcional.  
- **Seguridad y privacidad:** HTTPS y certificados SSL/TLS son cruciales.

---

## 📚 Materiales y Recursos Adicionales

- [Comunicación Cliente/Servidor - documentos de la web](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Client-Server_communication)  
- [Códigos de estado de respuesta HTTP - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)  
- [Métodos de petición HTTP - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)