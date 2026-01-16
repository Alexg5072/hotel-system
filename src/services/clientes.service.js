const repo = require('../repositories/clientes.repository');

exports.crearCliente = (data) => {
  if (!data.cedula || !data.nombres) {
    throw new Error('Datos obligatorios faltantes');
  }
  return repo.insertar(data);
};

exports.listarClientes = () => repo.listar();
