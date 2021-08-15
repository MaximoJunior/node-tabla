 const argv = require('yargs')
                 .option("b",
                 {
                     alias: 'base',
                     type: 'number',
                     demandOption: true,
                     describe: "Es la base de la tabla de multiplicar"
                 })
                 .check( (argv, option) =>{
                      if( isNaN( argv.base )) throw "La base tiene que ser un numero";
                      return true;
                 })
                 .option("l",
                 {
                      alias: 'listar',
                      type: 'boolean',
                      default: false,
                      describe: "Muestra la tabla en consola"
                 })
                 .check( (argv, option) => {
                     if( typeof argv.listar !== 'boolean') throw "Listar debe ser true o false";
                     return true;
                 } )
                 .option("h", 
                 {
                     alias: "hasta",
                     type : 'number',
                     default: 12,
                     describe: 'Hasta que numero sera la multiplicacion'
                 })
                 .check((argv, option) => {
                     if(isNaN(argv.hasta)) throw "Hasta deber ser un numero";

                     return true;
                 })
                 .argv;

module.exports = argv;