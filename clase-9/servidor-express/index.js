import express from 'express'

const app = express();

app.get('/', (req,res) => {
    res.send('Hola, munda de Express!');
});

app.get('/2', (req,res) => {
    res.send('Hola, munda de Express! (ruta2)');
});

app.get('/3', (req,res) => {
    res.send('Hola, munda de Express! (ruta3)');
});

app.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
})