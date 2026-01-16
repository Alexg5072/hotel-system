require('dotenv').config();
const express = require('express');
const path = require('path');

const authRoutes = require('./src/routes/auth.routes');

const app = express();
app.use(express.json());

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rutas API
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.post('/api/clientes', (req, res) => {
  const { nombre, correo, telefono } = req.body;

  if (!nombre || !correo) {
    return res.status(400).json({
      mensaje: 'Nombre y correo son obligatorios'
    });
  }

  res.status(201).json({
    mensaje: 'Cliente creado correctamente',
    cliente: {
      nombre,
      correo,
      telefono
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
