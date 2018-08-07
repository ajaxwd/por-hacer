const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'desscripcion por la tarea por hacer'
};

const completado = {
    desfault: true,
    alias: 'c',
    desc: 'marca como completado la tarea'
}

const argv = require('yargs')
    .command('crear', 'crear lista', {
        descripcion
    })
    .command('actualizar', 'actualizar lista', {
        descripcion,
        completado
    })
    .command('borrar', 'borrar lista', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}