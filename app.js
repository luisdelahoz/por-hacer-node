const {argv} = require('./config/yargs');
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch(comando) {
	case 'crear':
		let tarea = porHacer.crear(argv.descripcion);
		break;
	case 'listar':
		let completado = argv.completado === 'true' ? true : false;
		let listado = porHacer.getListado(completado);
		for(let tarea of listado) {
			console.log('========Por hacer========='.green);
			console.log(tarea.descripcion);
			console.log('Completado: ', tarea.completado);
			console.log('=========================='.green);
		}
		console.log('Mostrar todas las tareas por hacer');
		break;
	case 'actualizar':
		let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
		console.log(actualizado);
		console.log('Actualiza una tarea por hacer');
		break;
	case 'borrar':
		let borrado = porHacer.borrar(argv.descripcion);
		console.log(borrado);
		console.log('Borra una tarea por hacer');
		break;
	default:
		console.log('Comando no reconocido');
		break;
}