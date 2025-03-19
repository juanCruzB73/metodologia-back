const yargs = require('yargs');

const argv = yargs
  .command('saludar', 'Muestra un saludo', {
    nombre: {
      describe: 'Nombre de la persona a saludar',
      demandOption: true,
      type: 'string'
    }
  })
  .help()
  .argv;

if (argv._.includes('saludar')) {
  console.log(`Hola, ${argv.nombre}!`);
}
