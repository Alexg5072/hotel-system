// Base de datos simulada
const usuarios = [
  { id: 1, username: 'admin', password: 'admin123', nombre: 'Administrador' },
  { id: 2, username: 'user', password: 'user123', nombre: 'Usuario' }
];

exports.buscarUsuario = async (user, pass) => {
  return usuarios.find(u => u.username === user && u.password === pass);
};
