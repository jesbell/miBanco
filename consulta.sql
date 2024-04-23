
CREATE DATABASE banco

-- crear tabla de transferencia
CREATE TABLE transferencias (
  descripcion varchar(50),
  fecha varchar(10),
  monto DECIMAL,
  cuenta_origen INT,
  cuenta_destino INT
);

-- crear tabla cuentas
CREATE TABLE cuentas (id INT, saldo DECIMAL CHECK (saldo >= 0));

-- insertar valores en cuenta 1 y cuenta 2
INSERT INTO cuentas
values (1, 20000);
INSERT INTO cuentas
values (2, 10000);