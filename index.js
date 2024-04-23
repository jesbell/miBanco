const { Pool } = require("pg");

const argumentos = process.argv.slice(2);
const tipo_transaccion = argumentos[0];
const cuenta = argumentos[1];
const fecha = argumentos[2];
const descripcion = argumentos[3];
const monto = argumentos[4];
const cuentaDestino = argumentos[5];

const pool = new Pool({
  user: "usuario",
  host: "localhost",
  password: "contraseña",
  database: "banco",
  port: 5432,
});

const consulta = async ({ cuenta }) => {
  const { rows } = await pool.query(
    `select * from transferencias where cuenta_origen = ${cuenta} ORDER BY fecha DESC LIMIT 10;`
  );
  console.log(` Las ultimas 10 transferencias de la cuenta ${cuenta} son:`);
  console.log(rows);
};

const consultaSaldo = async ({ cuenta }) => {
  const {
    rows: [{ saldo }],
  } = await pool.query(`select saldo from cuentas where id = ${cuenta}`);
  console.log(`El saldo de la cuenta ${cuenta} es: ${saldo}`);
};

const nueva = async ({ descripcion, fecha, monto, cuenta, cuentaDestino }) => {
  const actualizarCuentaOrigen = {
    text: `UPDATE cuentas SET saldo = saldo - $1 WHERE id = $2 RETURNING *`,
    values: [monto, cuenta],
  };
  const actualizarCuentaDestino = {
    text: `UPDATE cuentas SET saldo = saldo + $1 WHERE id = $2 RETURNING *`,
    values: [monto, cuentaDestino],
  };

  const nueva = {
    text: "INSERT INTO transferencias values ($1, $2, $3, $4, $5) returning *",
    values: [descripcion, fecha, monto, cuenta, cuentaDestino],
  };

  try {
    await pool.query("BEGIN");
    const result = await pool.query(nueva);
    await pool.query(actualizarCuentaOrigen);
    await pool.query(actualizarCuentaDestino);
    await pool.query("COMMIT");
    console.log("Transacción realizada con éxito");
    console.log("Ultima transacción: ", result.rows[0]);
  } catch (e) {
    await pool.query("ROLLBACK");
    throw e;
  }
};

const funciones = {
  nueva,
  consulta,
  "consulta-saldo": consultaSaldo,
};

(async () => {
  try {
    await funciones[tipo_transaccion]({
      cuenta,
      fecha,
      descripcion,
      monto,
      cuentaDestino,
    });
  } catch (error) {
    console.log("Error", error);
  } finally {
    pool.end();
  }
})();

/*
    -----------
    Hola, Aquí tenemos instrucciones para ejecutar el programa;

    Orden de argumentos:
    node index.js <tipo_transaccion> <cuenta_origen> <fecha> <descripcion> <monto> <cuenta_destino>
    -----------

    EJEMPLOS:

    Nueva transacción:
    node index.js nueva 1 "16/10/2020" "Empanadas para el 18" 30000


    Consulta de últimas transferencias para la cuenta 1
    node index.js consulta 1


    Consulta de saldo para la cuenta 1
    node index.js consulta-saldo 1

*/
