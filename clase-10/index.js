import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.use((req, res, next) => {
    console.log(`Datos received at: ${req.method} ${req.url}`);
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

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});