require('colors');
const inquirer = require('inquirer');

const questionsMenu = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: '1',
                name: `${ '1.'.green } Crear tarea`
            },
            {
                value: '2',
                name: `${ '2.'.green } Listar tareas`
            },
            {
                value: '3',
                name: `${ '3.'.green } Listar tareas completadas`
            },
            {
                value: '4',
                name: `${ '4.'.green } Listar tareas pendientes`
            },
            {
                value: '5',
                name: `${ '5.'.green } Completar tarea(s)`
            },
            {
                value: '6',
                name: `${ '6.'.green } Borrar tarea`
            },
            {
                value: '0',
                name: `${ '0.'.green } Salir`
            }
        ]
    }
];

const inquirerMenu = async() => {
    console.clear();
    console.log('=========================='.green);
    console.log('  Seleccione una opción');
    console.log('==========================\n'.green);

    const { opcion } = await inquirer.prompt(questionsMenu);
    return opcion;
}

const pause = async() => {
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${ 'ENTER'.green } para continuar\n`
        }
    ];

    console.log('\n');
    await inquirer.prompt(question);
}

const readInput = async(message) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value) {
                if(value.length === 0) {
                    return 'Por favor ingrese un valor.';
                } 

                return true;
            }
        }
    ];

    const { desc } = await inquirer.prompt(question);
    return desc;
}

const listDeleteActivity = async(activities = []) => {
    
    const choices = activities.map((a, i) => {
        let idx = `${i + 1}.`.green;

        return {
            value: a.id,
            name: `${idx} ${ a.desc }`
        }
    });

    choices.unshift({
        value: '0',
        name: '0.'.green + 'Cancelar'
    });

    const questions = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices
        }
    ];

    const { id } = await inquirer.prompt(questions);
    return id;
};

const confirmDelete = async(message) => {
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];

    const { ok } = await inquirer.prompt(question);
    return ok;
}

const listCheckingActivity = async(activities = []) => {
    
    const choices = activities.map((a, i) => {
        let idx = `${i + 1}.`.green;

        return {
            value: a.id,
            name: `${ idx } ${ a.desc }`,
            checked: (a.completedIn) ? true : false
        }
    });

    const question = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Selecciones',
            choices
        }
    ];

    const { ids } = await inquirer.prompt(question);
    return ids;
};

module.exports = {
    inquirerMenu,
    pause,
    readInput,
    listDeleteActivity,
    confirmDelete,
    listCheckingActivity
}