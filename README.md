## `Proyecto`

PLANET BURGER - Proyecto Final de ReactJs (CODERHOUSE)

[PlanetBurger](https://lautarofrias.github.io/PlanetBurger/) es un e-commerce ficticio, creado y utilizado como proyecto final del curso de JavaScript en CODERHOUSE.
Este emprendimiento al igual que todos mis proyectos de desarrollo web, se encuentran disponibles dentro de mis [Repositorios](https://github.com/LautaroFrias).

## `Scripts disponibles, Instalación y dependencias`

El proyecto esta inicializado con `npx install create-react-app planetburger-app`.

     Para el Routing utilice, `npm i react-router-dom` para crear los path y casi en su totalidad, la página utiliza Bootstrap en cuanto a estilos se refiere.
    Para ello, instalamos las dependencias desde la consola `npm install react-bootstrap bootstrap@5.1.3`.

Todas las imágenes, iconos y logos se encuentran dentro de la carpeta `public/imagenes`.
Preferentemente utilice [Flaticon](https://www.flaticon.es/).

Puedes acceder a la documentación de [React](https://reactjs.org/).

### `npm start`

La APP inicializa con el comando 'npm start' desde la consola de tu editor de código.
Abrir [http://localhost:3000](http://localhost:3000) para visualizarlo en el navegador (no obstante esto ocurre automáticamente).

La página se recargará si realizamos cambios, como también veremos cualquier " lint errors " en la consola.

### `Lenguajes de programacion utilizados`

    HTML
    CSS
    JAVASCRIPT
    REACT JS

Base de datos utilizado:

     Firebase/Firestore

## `.env`

Se agregó un archivo .env con los datos necesarios de Firebase para encriptar las credenciales de administración de Firebase.
Este mismo se encuentra ignorado dentro del archivo `.gitignore`.

Si te interesa visualizar o inicializar el proyecto, encontrarás un archivo con extensión `.env.example`.
Recordá que estos datos son de ejemplo.

    REACT_APP_apiKey=asdasdasdasdasd
    REACT_APP_authDomain=asdasdasd.firebaseapp.com
    REACT_APP_projectId=asdasdasd
    REACT_APP_storageBucket=asdasdasd.appspot.com
    REACT_APP_messagingSenderId=123123123123
    REACT_APP_appId=1:123123123:web:0ae622ca5bsd9fa27d

Luego en `firebase.js` se llaman a las variables de entorno de la siguiente forma:

    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,

## En este archivo `firebase.js` se inicializa Firebase en la APP.

Inician tanto la base de datos (DataBase) como asi tambien las credenciales de Firebase.

Para crear un Object del producto deberá realizarse de la siguiente forma:

    `categoria:`  categoria del producto
    `desc:` desc del producto para el 'ItemDetail'
    `img:` URL donde se alojan las imagenes del menú
    `nombre:` nombre del producto
    `precio:` precio del producto
    `stock:` cantidad disponible, se toma desde el 'ItemCount'
    `tamaño:` tamaño del producto
