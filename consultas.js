const pool = require("./dbconfig");

const consulta = async ({ cuenta }) => {

    try {
        const query = {
            rowMode: "array",
            text: `SELECT * FROM transferencias WHERE cuenta_origen = $1 ORDER BY fecha DESC LIMIT 10;`,
            values: [cuenta],
        }; 
    
        const { rows }  = await pool.query(query);

        // Verifica la existencia de la cuenta y lanza el error.
        if (rows.length === 0) {
            throw new Error(`No se encontró ninguna transferencia para la cuenta ${cuenta}`);
        }
        console.log(` Las ultimas 10 transferencias de la cuenta ${cuenta} son:`);
        console.log(rows);
        
    } catch (error) {
        console.error(`Error en la consulta: ${error.message}`)
    }

    
};

const consultaSaldo = async ({ cuenta }) => {
    try {
        const {
            rows: [{ saldo }],
        } = await pool.query(`select saldo from cuentas where id = $1`, [cuenta]);

        console.log(`El saldo de la cuenta ${cuenta} es: ${saldo}`);
        
    } catch (error) {
        throw new Error(`Error al consultar el saldo: ${error.message}`);
    }

    
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