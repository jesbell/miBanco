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
    switch (tipo_transaccion) {
      case "nueva":
        await nueva({
          descripcion,
          fecha,
          monto,
          cuenta,
          cuentaDestino,
        });
        break;
      case "consulta":
        await consulta({ cuenta });
        break;
      case "consulta-saldo":
        await consultaSaldo({ cuenta });
        break;
      default:
        console.log("Operación no válida");
    }
  } catch (error) {
    console.log("Error", error);
  } finally {
    process.exit();
  }
})();
