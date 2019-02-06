const argv = require('./configs/yargs').argv;
const colors = require('colors');

const { crearArchivo, listar } = require('./multiplicar/multiplicar')


let comando = argv._[0];

switch (comando) {
    case 'listar':
        listar(argv.base, argv.limite)
            .then(console.log('Impresion de tabla'))
            .catch(err => {
                console.log(err);
            });
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo}`.rainbow))
            .catch(err => {
                console.log(err);
            });

        break;

    default:
        console.log('Comando no reconocido');
}

// let base = '7';

//let argv2 = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1]

//console.log(base);
//console.log('Limite', argv.limite);
//console.log(multiplicar);

//multiplicar.crearArchivo