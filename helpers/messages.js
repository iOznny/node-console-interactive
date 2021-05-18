require('colors');

const showMenu = () => {
    return new Promise(resolve => {
        console.clear();
        console.log('=========================='.green);
        console.log('  Seleccione una opción: ');
        console.log('==========================\n'.green);
    
        console.log(`${ '1.'.green } Crear tarea`);
        console.log(`${ '2.'.green } Listar tareas`);
        console.log(`${ '3.'.green } Listar tareas completadas`);
        console.log(`${ '4.'.green } Listar tareas pendientes`);
        console.log(`${ '5.'.green } Completar tarea(s)`);
        console.log(`${ '6.'.green } Borrar una tarea`);
        console.log(`${ '0.'.green } Salir \n`);
    
        // Indicamos que tendremos una entrada de consola.
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        // Obtenemos el valor emitido por consola.
        readLine.question('Seleccione una opción: ', (opt) => {        
            readLine.close();
            resolve(opt);
        });
    });
}

const pause = () => {
    return new Promise(resolve => {
        // Indicamos que tendremos una entrada de consola.
         const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        // Obtenemos el valor emitido por consola.
        readLine.question(`\nPresione ${ 'ENTER'.green } para continuar\n`, () => {
            readLine.close();
            resolve();
        });
    });
}

module.exports = {
    showMenu,
    pause
}