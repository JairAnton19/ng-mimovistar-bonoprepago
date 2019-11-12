# TDP Telefonica del Peru, TdP-CLI - Acelerador de código.

Herramienta para la creación de los arquetipos base para los proyectos de desarrollo en Arquitectura Digital.

## Getting Started

Puede descargar el proyecto TdP-CLI desde el siguiente repositorio remoto.

```
git clone http://devops-gns.eastus2.cloudapp.azure.com:10080/genesis-frontend/nd-tdp-cli.git
```

### Prerequisites

What things you need to install the software and how to install them

* [JavaScript](http://www.ecma-international.org/publications/standards/Ecma-262.htm) - Programming Language.
* [Node.js](https://nodejs.org/en/) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
* [npm](https://www.npmjs.com/) - Package manager for the JavaScript programming language.

### Installing

Para su primera instalación:

```
npm install -g @tdp/tdp-cli
```

Para su desinstalación:

```
npm uninstall -g @tdp/tdp-cli
```

Para actualizar el paquete los desinstalamos y lo volvemos a actualizar:

```
npm uninstall -g @tdp/tdp-cli
npm install -g @tdp/tdp-cli
```

## Running

Para la ejecución del TdP-CLI ejecutamos el siguiente comando:

```
tdp
```

De esta manera se muestran las opciones de la aplicación:

```
  _____ ____  ____             ____ _     ___
 |_   _|  _ \|  _ \           / ___| |   |_ _|
   | | | | | | |_) |  _____  | |   | |    | |
   | | | |_| |  __/  |_____| | |___| |___ | |
   |_| |____/|_|              \____|_____|___|

1.0.12

    TDP Accelator - Team Genesis.
    tdp [command] <options>


    flow .................... Add new FLow.
    help .................... show help menu for a command.
    microservice <<NEW!>>.... Creación de un microservicio.
    mock .................... Star de Mock Server.
    module .................. Add new Module.
    pwa ..................... login > drawer (Angular 7, Ionic 4 - Stencil 0.18).
    version ................. show package version.
    webapp .................. login > (Angular 7 - Stencil 0.18 ).
```

Para ejecutar la opciones la estructura básica del comando es:

```
tdp [command] <options>
```

Para información detalladad de la ejecución de cada comando usar la opción help:

```
tdp [command] --help
```

### Mock

Para colocar los Mocks utilizar la siguiente ruta:

   mock
     users
     products

## Running the tests

TODO!

### Break down into end to end tests

TODO: Listar los test.

### And coding style tests

TODO!

## Deployment

Referirse a la sección de instalación

## Built With

* [JavaScript](http://www.ecma-international.org/publications/standards/Ecma-262.htm) - Programming Language.
* [Node.js](https://nodejs.org/en/) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
* [npm](https://www.npmjs.com/) - Package manager for the JavaScript programming language.

## Versioning

We use [SemVer](http://semver.org/) for versioning.

## Authors

* **everis SAC** - *Initial work* - [everis](https://www.everis.com/peru)