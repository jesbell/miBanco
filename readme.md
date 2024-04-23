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

Para utilizar este proyecto debes clonar este repositorio en tu máquina, utilizando git.

```
git clone git@github.com:jesbell/alwaysMusic.git
```

Una vez allí puedes abrir el proyecto donde te sea más comodo. Pero dentro de la carpeta del proyecto deberas realizar las instalación de las dependencias, con el siguiente comando.

```
npm install
```

También debes crear la base de datos correspondiente que esta utilizando este proyecto y su tabla estudiantes. Dichas consultas se encuentran en el archivo consulta.sql.

Crea la base datos: 
```
CREATE DATABASE banco
```
Y crea las dos tablas: 
```
// !!! El rut es la PRIMARY KEY
CREATE TABLE estudiantes (
    Rut VARCHAR(12) PRIMARY KEY,
    Nombre VARCHAR(255) NOT NULL,
    Curso VARCHAR(50) NOT NULL,
    Nivel INT NOT NULL
); 
```

El siguiente paso es hacer la conexión a la base de datos. En el archivo dbConfig.js debes agregar tu usuario y contraseña, y el nombre de la base de datos que creaste si la creaste con un nombre distinto.
```
// inserta tus datos
const usuario_name = "";
const pass_usuario = "";
```

``` 
// el nombre por defecto de la base datos, 
// puedes cambiarlo por el nombre que tu hayas creado.
const config = {
    ...
    database: "alwaysmusic",
    ...
};
```

En el archivo basededato.sql, puedes encontrar también unos insert para que tengas datos para comprobar la primera consulta. 
Si realizas esos insert, entonces en tu consola ingresa lo siguiente:

```
node index.js consulta
```
Y debería darte como resultado todos los estudiantes y sus datos que existen en tabla estudiantes.

Puedes utilizar otros comandos de la siguiente manera:

Para Crear:
``````
node index.js nuevo "bryan May" "19.456.785-8" guitarra 7
node index.js nuevo "Jusef May" "19.356.775-k" violin  8
``````
Para Editar:
```
node index.js editar "bryan May" "19.456.785-8" guitarra 9
```
Para consultar por rut:
```
node index.js rut "98.765.432-1"
```
Para eliminar estudiante por rut:
```
node index.js eliminar "19.356.775-k"
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
