const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data', 'example.txt');

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File content:', data);
});

// __dirname -> Directorio actual
// __filename -> Archivo actual
// path -> Modulo para manejar rutas de archivos y directorios
// fs -> File System, Modulo para manejar archivos y directorios

import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
console.log(__filename); // Ruta completa del archivo actual
const __dirname = path.dirname(__filename);
console.log(__dirname); // Directorio del archivo actual
