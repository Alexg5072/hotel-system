const repo = require('../repositories/auth.repository');

exports.login = (username, password) => {
  return repo.buscarUsuario(username, password);
};
