import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

const corsConfig = {
    origin: ['http://localhost:3000', 'https://midominio.com'], // dominios permitidos
    methods: ['GET', 'POST', 'PUT', 'DELETE'],                  // métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'],          // cabeceras permitidas
    exposedHeaders: ['Content-Length'],                         // cabeceras visibles al cliente
    credentials: true,                                          // habilitar credenciales
    maxAge: 600,                                                // cache preflight
    optionsSuccessStatus: 204                                   // respuesta preflight exitosa
}

app.use(cors(corsConfig));

app.use((req, res, next) => {
    console.log(`Datos received at: ${req.method} ${req.url}`);
    app.use((req, res, next) => {
        /*res.header('Access-Control-Allow-Origin', 'https://example.com');
        res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        res.header('Access-Control-Allow-Credentials', 'true');*/
        next();
    });
    next();
});

app.get('/HTML', (req, res) => {
    res.send('<h1>Hola, este es un mensaje en HTML</h1>');
});

app.get('/JSON', (req, res) => {
    res.json({
        productos: [
            {
                id: 1,
                nombre: 'Producto 1',
                precio: 100
            },
            {
                id: 2,
                nombre: 'Producto 2',
                precio: 200
            }
        ]
    });
});

// Ruta con parametro dinámico -> localhost:3000/item/5
app.get('/item/:id', (req, res) => {
    const itemId = req.params.id;
    res.send(`Has solicitado el item con ID: ${itemId}`);
});

// Query parameters -> localhost:3000/items?category=ropa&price=100
app.get('/items', (req, res) => {
    const category = req.query.category;
    const price = req.query.price;
    res.send(`Has solicitado items de la categoría: ${category} con Precio: ${price}`);
});

app.use((req, res, next) => {
    res.status(404).send('Ruta no encontrada o recurso no encontrado');
});

// Lo ultimo siempre
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});