const express = require('express');
const router = express.Router();
const vehiculoController = require('../controllers/vehiculoController');

/**
 * @swagger
 * /api/registrar:
 *   post:
 *     summary: Registrar un vehículo en el parqueadero
 *     description: Agrega un vehículo (moto o carro) al parqueadero.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               placa:
 *                 type: string
 *                 description: La placa del vehículo
 *               tipo:
 *                 type: string
 *                 enum: [moto, carro]
 *                 description: El tipo de vehículo (moto o carro)
 *               modelo:
 *                 type: string
 *                 description: El modelo del vehículo
 *     responses:
 *       201:
 *         description: Vehículo registrado exitosamente
 *       400:
 *         description: Error en la solicitud, datos inválidos
 */
router.post('/registrar', vehiculoController.registrarVehiculo);

/**
 * @swagger
 * /api/vehiculos:
 *   get:
 *     summary: Obtener la lista de vehículos en el parqueadero
 *     description: Devuelve todos los vehículos registrados en el parqueadero.
 *     responses:
 *       200:
 *         description: Lista de vehículos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   placa:
 *                     type: string
 *                   tipo:
 *                     type: string
 *                   modelo:
 *                     type: string
 *       500:
 *         description: Error en el servidor
 */
router.get('/vehiculos', vehiculoController.obtenerVehiculos);

/**
 * @swagger
 * /api/vehiculos/{placa}:
 *   delete:
 *     summary: Eliminar un vehículo del parqueadero por su placa
 *     description: Elimina un vehículo (moto o carro) del parqueadero usando la placa como referencia.
 *     parameters:
 *       - in: path
 *         name: placa
 *         required: true
 *         description: La placa del vehículo a eliminar
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Vehículo eliminado exitosamente
 *       404:
 *         description: Vehículo no encontrado
 */
router.delete('/vehiculos/:placa', vehiculoController.eliminarVehiculo);

// Ruta para actualizar un vehículo
/**
 * @swagger
 * /api/vehiculos/{placa}:
 *   put:
 *     summary: Actualizar un vehículo en el parqueadero
 *     description: Actualiza los datos de un vehículo (tipo y modelo) en el parqueadero usando la placa.
 *     parameters:
 *       - in: path
 *         name: placa
 *         required: true
 *         description: La placa del vehículo a actualizar
 *         schema:
 *           type: string
 *       - in: body
 *         name: vehiculo
 *         required: true
 *         description: Los nuevos datos del vehículo (tipo y modelo)
 *         schema:
 *           type: object
 *           properties:
 *             tipo:
 *               type: string
 *               enum: [moto, carro]
 *               description: El tipo de vehículo (moto o carro)
 *             modelo:
 *               type: string
 *               description: El modelo del vehículo
 *     responses:
 *       200:
 *         description: Vehículo actualizado exitosamente
 *       404:
 *         description: Vehículo no encontrado
 *       400:
 *         description: Error en la solicitud, datos inválidos
 *       500:
 *         description: Error en el servidor
 */
router.put('/vehiculos/:placa', vehiculoController.actualizarVehiculo);

module.exports = router;