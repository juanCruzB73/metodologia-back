/*
Crea un script con Yargs que permita sumar dos números desde la línea de comandos. (n1 y n2)
*/

const yargs = require('yargs');

const argv = yargs
  .command('sumar', 'suma numeros', {
    num1: {
      describe: 'First num to sum',
      demandOption: true,
      type: 'number'
    },
    num2:{
      describe: 'Second num to sum',
      demandOption: true,
      type: 'number'
    }
  })
  .help()
  .argv;

if (argv._.includes('sumar')) {
  console.log(`La suma entre ${argv.num1} y ${argv.num2} es: ${argv.num1+argv.num2}`);
}
