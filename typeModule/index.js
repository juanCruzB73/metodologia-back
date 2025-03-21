import fs from 'fs';
import _yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import {crearArchivo} from  './modules/createFile.js';
import {createTable} from  './modules/createTable.js';
import 'dotenv/config';

const yargs = _yargs(hideBin(process.argv));
const argv = yargs
  .option('port',{
    alias:'p',
    type:'string',
    description:'port value',
    default:process.env.PORT
  })
  .command('test', 'base a multiplicar', {
    base: {
      describe: 'base a multiplicar',
      demandOption: true,
      type: 'number'
    },
})
  .help()
  .argv;

const basePased = argv.base || 5;
let table=createTable(basePased);

console.log(`puerto: ${argv.port}`);

if (fs.existsSync("Ctabla")) {
  console.log("la carpeta ya existia, procedo a hacer el archivo");
  crearArchivo(table,basePased);
} else {
  try {
    fs.mkdirSync(`Ctabla`);
    crearArchivo(table,basePased);
  } catch (err) {
    if (err) throw err;
  }
}

