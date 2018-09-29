const fs = require('fs');

let listadoPorHacer = [];

const guardarDb = () => {
	let data = JSON.stringify(listadoPorHacer);
	fs.writeFile('db/data.json', data, (error) => {
		if(error) throw new Error('No se pudo grabar');
		console.log('Tarea guardada');
	});
};

const cargarDb = () => {
	try {
		listadoPorHacer = require('../db/data.json');
	} catch(error) {
		listadoPorHacer = [];
	}
};

const actualizar = (descripcion, completado = true) => {
	cargarDb();
	let index = listadoPorHacer.findIndex((tarea) => tarea.descripcion === descripcion);
	if(index >= 0) {
		listadoPorHacer[index].completado = completado;
		guardarDb();
		return true;
	} else {
		return false;
	}
};

const borrar = (descripcion) => {
	cargarDb();
	let nuevoListado = listadoPorHacer.filter((tarea) => tarea.descripcion !== descripcion);
	if(nuevoListado.length !== listadoPorHacer) {
		listadoPorHacer = nuevoListado;
		guardarDb();
		return true;
	} else {
		return false;
	}
};

const crear = (descripcion) => {

	cargarDb();

	let porHacer = {
		descripcion,
		completado: false
	};

	listadoPorHacer.push(porHacer);

	guardarDb();

	return porHacer;
};

const getListado = (completado) => {
	cargarDb();
	listadoPorHacer = listadoPorHacer.filter((tarea) => tarea.completado === completado);
	return listadoPorHacer;
}

module.exports = {
	actualizar,
	borrar,
	crear,
	getListado
}