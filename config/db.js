// config/db.js
const { Pool } = require('pg');

// Configurar los parámetros de conexión a PostgreSQL
const pool = new Pool({
  user: 'postgres',       // tu usuario de PostgreSQL
  host: 'localhost',        // servidor donde está la base de datos
  database: 'gestioninventario',  // nombre de tu base de datos
  password: '0',     // tu contraseña de PostgreSQL
  port: 5432,               // puerto en el que PostgreSQL está corriendo
});

// Probar la conexión
pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error al conectarse a la base de datos', err.stack);
  }
  console.log('Conexión exitosa a la base de datos');
  release(); // liberar el cliente de la conexión
});

module.exports = pool;