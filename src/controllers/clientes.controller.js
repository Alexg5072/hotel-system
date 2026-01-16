const service = require('../services/clientes.service');

exports.crear = async (req, res) => {
  try {
    const cliente = await service.crearCliente(req.body);
    res.status(201).json(cliente);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.listar = async (req, res) => {
  const clientes = await service.listarClientes();
  res.json(clientes);
};
