/*
Implementa un comando que lea un archivo JSON y muestre su contenido en la terminal.
*/
const yargs = require('yargs');
const fs=require('fs');
const argv = yargs
  .command('leer', 'lee un json', {
    file:{
      describe: 'archivo a leer',
      demandOption: true,
      type: 'string'
    }
  })
  .help()
  .argv;


if (argv._.includes('leer')) {
    if(!fs.existsSync(argv.file)){
      return console.error('el archivo ingresado no existe')
    }
    fs.readFile(argv.file,'utf8', (err, data) => {
      if(err)throw new err;
      const dataParse=JSON.parse(data);
      console.log(dataParse);
    })
  
}