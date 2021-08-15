const fs = require("fs"); //require for getting module of node
const colors =  require('colors/safe');

//Functions async return a Promise
const crearArchivo = async (base = 5, listar = false, hasta = 12)=> {

       try{

            let salida = '';
            for( let i = 1; i <= hasta; i++ ){
                let saltoDeLinea = (i === hasta) ? "" : "\n";
                salida += `${base} x ${ i } = ${ base * i }${saltoDeLinea}`;
            }

            if( listar ){
                console.log(colors.cyan("==================================="));
                console.log(colors.gray("        TABLA DEL "), colors.green(base));
                console.log(colors.cyan("==================================="));
                console.log(salida);
            }

            const fileName = `tabla-${base}.txt`;
            const path = "./salida/" + fileName;
            fs.writeFileSync( path, salida );

            return fileName;

    
       }catch(error){
            throw error;
       }

    // fs.writeFile( `tabla-${base}.txt`,  salida, err =>{
    
    //      if(err) throw err;
         
    //      console.log(`tabla-${base}.txt creado`);
    // })
   
    
    // console.log(`tabla-${base}.txt creado`);
    
   
}

// const crearArchivo = (base = 5 )=> {


//     return new Promise( (resolve, reject) => {
//        try{

//             console.log("===================================");
//             console.log("        TABLA DEL ", base);
//             console.log("===================================");

//             let salida = '';
//             for( let i = 1; i <= 12; i++ ){
//                 let saltoDeLinea = (i === 12) ? "" : "\n";
//                 salida += `${base} x ${ i } = ${ base * i }${saltoDeLinea}`;
//             }

//             console.log(salida);

//             const fileName = `tabla-${base}.txt`;
//             fs.writeFileSync( fileName,  salida);

//             resolve(fileName);

    
//        }catch(error){
//             throw error;
//        }

//     });

   
    
//     // fs.writeFile( `tabla-${base}.txt`,  salida, err =>{
    
//     //      if(err) throw err;
         
//     //      console.log(`tabla-${base}.txt creado`);
//     // })
   
    
//     // console.log(`tabla-${base}.txt creado`);
    
   
// }

module.exports = {
    crearArchivo: crearArchivo
}