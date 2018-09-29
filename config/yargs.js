const descripcion = {
	alias: 'd',
	desc: 'Descripción de la tarea por hacer',
	required: true
};

const completado = {
	alias: 'c',
	default: true,
	desc: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs')
		.command('crear', 'Crear un elemento por hacer', {
			descripcion
		})
		.command('listar', 'Mostrar listado de tareas', {
			completado: {
				alias: 'c'
			}
		})
		.command('actualizar', 'Actualiza el estado completado de una tarea', {
			descripcion,
			completado
		})
		.command('borrar', 'Borra una tarea', {
			descripcion
		})
		.help()
		.argv;

module.exports = {
	argv: argv
};