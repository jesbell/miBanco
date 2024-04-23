const pool = require("./dbconfig");

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

module.exports = { nueva, consulta, consultaSaldo };