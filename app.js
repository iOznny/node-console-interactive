require('colors');
const { inquirerMenu, pause } = require('./helpers/inquirer');
const Activities = require('./models/activities');

const main = async() => {
    let opt = '';

    // Repetición del menu de opciones.
    do {        
        opt = await inquirerMenu();        
        await pause();    


        
    } while (opt !== '0');
}

main();