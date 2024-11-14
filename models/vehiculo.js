const mongoose = require('mongoose');

const vehiculoSchema = new mongoose.Schema({
  placa: { type: String, required: true, unique: true },
  tipo: { type: String, enum: ['carro', 'moto'], required: true },
  tiempoEntrada: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Vehiculo', vehiculoSchema);