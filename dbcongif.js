const { Pool } = require("pg");

const usuario_name = "";
const pass_usuario = "";

const pool = new Pool({
    user: usuario_name,
    host: "localhost",
    password: pass_usuario,
    database: "banco",
    port: 5432,
});

module.exports = pool;