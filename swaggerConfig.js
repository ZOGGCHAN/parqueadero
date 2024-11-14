const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');


const swaggerOptions = {
  definition: {
    openapi: '3.0.0', 
    info: {
      title: 'API de Parqueadero', 
      version: '1.0.0', 
      description: 'Documentación de la API para gestionar vehículos en un parqueadero', 
    },
  },
  apis: ['./routes/*.js'], 
};


const swaggerSpec = swaggerJSDoc(swaggerOptions);

module.exports = { swaggerSpec, swaggerUi };