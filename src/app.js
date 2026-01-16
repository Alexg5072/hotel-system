const express = require('express');
const cors = require('cors');
const path = require('path');

const authRoutes = require('./routes/auth.routes');

const app = express();

app.use(cors());
app.use(express.json());

// 👉 ESTA LÍNEA ES CLAVE
app.use(express.static(path.join(__dirname, '../public')));

// rutas API
app.use('/api/auth', authRoutes);

module.exports = app;
