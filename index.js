console.log("Clase de Archivos");

const { Console } = require("console");
const fs = require("fs");
/*
const getfile = fs.readFileSync("./file/data.txt");

console.log(getfile.toString('hex'));
*/

// Prueba con llamado de funciones 

fs.readFile('./file/data.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});


// Prueba salida de Archivos
const textsalidafile = "El texto puede tener caracteres y numeros 1231254123";

fs.writeFile('./file/message.txt', textsalidafile, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });



