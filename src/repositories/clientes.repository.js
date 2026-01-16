const pool = require('../config/db');

exports.insertar = async (c) => {
  const sql = `
    INSERT INTO clientes (cedula, nombres, apellidos, telefono, correo)
    VALUES ($1,$2,$3,$4,$5) RETURNING *
  `;

  const result = await pool.query(sql, [
    c.cedula, c.nombres, c.apellidos, c.telefono, c.correo
  ]);

  return result.rows[0];
};

exports.listar = async () => {
  const result = await pool.query('SELECT * FROM clientes');
  return result.rows;
};
