require('colors');
const inquirer = require('inquirer');

const questionsMenu = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: ['opt1', 'opt2']
    }
];

const inquirerMenu = async() => {
    //console.clear();
    console.log('=========================='.green);
    console.log('  Seleccione una opción: ');
    console.log('==========================\n'.green);

    const opt = await inquirer.prompt(questionsMenu);
    return opt;
}

module.exports = {
    inquirerMenu
}

