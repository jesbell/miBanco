const { nueva, consulta, consultaSaldo } = require("./consultas");


const argumentos = process.argv.slice(2);
const tipo_transaccion = argumentos[0];
const cuenta = argumentos[1];
const fecha = argumentos[2];
const descripcion = argumentos[3];
const monto = argumentos[4];
const cuentaDestino = argumentos[5];

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
