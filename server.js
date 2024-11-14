require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { swaggerSpec, swaggerUi } = require('./swaggerConfig'); 
const vehiculoRoutes = require('./routes/vehiculoRoutes');  

const app = express();

app.use(bodyParser.json());

// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Conectado a MongoDB'))
.catch(err => console.error('Error al conectar a MongoDB:', err));

// Agregar Swagger UI en la ruta /api-docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Rutas de la API
app.use('/api', vehiculoRoutes);

app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');
  console.log('Documentación Swagger disponible en http://localhost:3000/api-docs');
});