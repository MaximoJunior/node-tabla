const { crearArchivo } = require('./helpers/multiplicar');
const argv = require("./config/yargs");

//Imprimir la tabla de multiplicar en la consola.
console.clear();

// console.log( process.argv );
// console.log( argv );
// console.log( 'base: yargs', argv.base );

// console.log(process.argv);
// process.argv; return array [path donde se encuentra nuestra applicacion de node instalada, Donde se encuentra la applicacion ejecutado que se acaba de hacer]
// console.log(process.argv)
// const [ , , arg3 = 'base=5'] = process.argv;
// const [, base] = arg3.split("=");

// console.log( base );

// const base = 4;

crearArchivo( argv.base, argv.listar, argv.hasta )
   .then( archivo => console.log(archivo, "Creado!"))
   .catch( error => console.log(error) );
