# Desafío Guiado Mi Banco
Este desafío es parte del curso de Desafio Latam, Desarrollo de aplicaciones Full Stack Js, en el cual validaremos nuestros conocimientos de Transacciones, Captura de errores en transacciones


# Descripción del desafío
La empresa Mi Banco SPA está recién registrada y está en búsqueda de un desarrollador full stack developer que empiece a crear su sistema de transacciones. Previamente los dueños de esta empresa habían intentado crear una institución bancaria pero el software que compraron tenía vulnerabilidades y permitía hacer transacciones sin restricciones, por lo que están exigiendo de extrema necesidad controlar efectivamente los movimientos bancarios para no generar balances negativos y consecuencia con sus clientes.


# Visuales

Este proyecto se puede visualizar en el terminal, para este caso debe ingresar los comandos para cada instrucción: Nueva, consulta y consulta-saldo.

| Nueva Transacción | Consulta y consulta saldo |
| --- | --- |
| ![Visualización](/assets/visual_1.png)| ![Visualización_dos](/assets/visual_2.png) |



## Empezando 🚀

Estas instrucciones te guiarán para obtener una copia de este proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.

### Prerrequisitos 📋

Lista de software y herramientas, incluyendo versiones, que necesitas para instalar y ejecutar este proyecto:

- Sistema Operativo: puedes usar Ubuntu o Windows 10 o superior.
- Se trabajo con Javascript.
- Se utilizo pg.

### Instalación 🔧

1. Para utilizar este proyecto debes clonar este repositorio en tu máquina, utilizando git.

```
git clone git@github.com:jesbell/alwaysMusic.git
```

2. Una vez allí puedes abrir el proyecto donde te sea más comodo. Pero dentro de la carpeta del proyecto deberas realizar las instalación de las dependencias, con el siguiente comando.

```
npm install
```

3. Debes crear la base de datos correspondiente que esta utilizando este proyecto y sus tablas. Dichas consultas se encuentran en el archivo consulta.sql. Desdes realizar esas instrucciones indicadas, para generar la base de datos y tablas que utiliza este proyecto, son dos tablas.

4. El siguiente paso es hacer la conexión a la base de datos. En el archivo dbconfig.js debes agregar tu usuario y contraseña.
```
// inserta tus datos
const usuario_name = "";
const pass_usuario = "";
```
5. Finalmente, para utilizar el proyecto, se debe usar en consola con sus respetivas instrucciones, el formato principal es el siguiente:
   
```
node index.js <tipo_transaccion> <cuenta_origen> <fecha> <descripcion> <monto> <cuenta_destino>
```

En <tipo_transaccion> puedes colocar: nueva o consulta, o consulta-saldo.

5.1. La instrucción nueva: Lo que realiza esta instruscción es realizar una transferencia de una cuenta a otra 
- cuenta_origen: el numero de la cuenta.
- fecha: es un string.
- Descripción: una pequeña descripción..
- monto: la cantidad de dinero a transferir.
- cuenta_destino: el numero de la cuenta destino.

Por ejemplo: Aquí hay una transferecia de cuenta 1 a cuenta 2.
```
node index.js nueva 1 "16/10/2020" "Empanadas para el 18" 30000 2
```
5.2. La instrucción consulta: nos entrega las últimas 10 transferencia de la cuenta.
Por ejemplo:

```
node index.js consulta 1
```
5.3 La instrucción consulta-saldo: devuelve el saldo de la cuenta.
```
node index.js consulta-saldo 1
```


## Soporte

Si tienes algún problema o sugerencia, por favor abre un problema [aquí](https://github.com/jesbell/alwaysMusic/issues).

## Versionado  📌

Usamos [Git](https://git-scm.com) para el versionado.

## Expresiones de Gratitud 🎁

Si encontraste cualquier valor en este proyecto o quieres contribuir, aquí está lo que puedes hacer:

- Comparte este proyecto con otros
- Invítanos un café ☕
- Inicia un nuevo problema o contribuye con un PR
- Muestra tu agradecimiento diciendo gracias en un nuevo problema.

---

⌨️ con ❤️ por [Joselyn Gonzalez](https://github.com/jesbell) 😊
