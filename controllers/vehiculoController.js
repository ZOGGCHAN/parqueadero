const Vehiculo = require('../models/vehiculo');

// Crear un vehículo (registro de placa y tipo)
exports.registrarVehiculo = async (req, res) => {
  const { placa, tipo } = req.body;

  try {
    const vehiculo = new Vehiculo({ placa, tipo }); // MongoDB
    await vehiculo.save();
    res.status(201).json({ message: 'Vehículo registrado exitosamente' });
  } catch (error) {
    res.status(400).json({ message: 'Error al registrar vehículo', error });
  }
};

// Leer todos los vehículos (consulta general)
exports.obtenerVehiculos = async (req, res) => {
  try {
    const vehiculos = await Vehiculo.find();
    res.status(200).json(vehiculos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener vehículos', error });
  }
};

exports.eliminarVehiculo = (req, res) => {
    const { placa } = req.params;
  
    // Buscar y eliminar el vehículo en la base de datos
    Vehiculo.findOneAndDelete({ placa: placa })
      .then(vehiculo => {
        if (!vehiculo) {
          return res.status(404).json({ message: 'Vehículo no encontrado' });
        }
        res.status(200).json({ message: 'Vehículo eliminado exitosamente' });
      })
      .catch(err => {
        res.status(500).json({ message: 'Error al eliminar el vehículo', error: err });
      });
  };

  // Controlador para actualizar un vehículo
exports.actualizarVehiculo = (req, res) => {
  const { placa } = req.params; 
  const { tipo, modelo } = req.body;
  Vehiculo.findOneAndUpdate(
    { placa: placa },
    { tipo, modelo },
    { new: true }
  )
  .then(vehiculo => {
    if (!vehiculo) {
      return res.status(404).json({ message: 'Vehículo no encontrado' });
    }
    res.status(200).json({ message: 'Vehículo actualizado exitosamente', vehiculo });
  })
  .catch(err => {
    res.status(500).json({ message: 'Error al actualizar el vehículo', error: err });
  });
};