import express from "express";

const app = express();
const PORT = 3000;

// Middleware de logging simple
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Ruta principal
app.get("/", (req, res) => {
  res.send("Servidor funcionando correctamente 🚀");
});

// Ruta /ping -> responde con /pong
app.get("/ping", (req, res) => {
  res.send("/pong");
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
