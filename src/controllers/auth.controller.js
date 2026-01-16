const service = require('../services/auth.service');

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = await service.login(username, password);

  if (user) {
    res.json({ ok: true });
  } else {
    res.json({ ok: false, message: 'Credenciales incorrectas' });
  }
};
