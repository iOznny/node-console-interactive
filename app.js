require('colors');
const { inquirerMenu, pause, readInput } = require('./helpers/inquirer');
const { saveDB, readDB } = require('./helpers/saveFile');
const Activities = require('./models/activities');

const main = async() => {
    let opt = '';
    const activities = new Activities();
    const activitiesDB = readDB();

    // Load activities
    if (activitiesDB) {
        activities.loadActivities(activitiesDB);
    }

    // Repetición del menu de opciones.
    do {        
        // Imprimir el menú.
        opt = await inquirerMenu();   
        
        switch (opt) {
            case '1':    
                // Crear actividad.
                const desc = await readInput('Descripción: ');
                activities.createActivity(desc);
            break;

            case '2':    
                // Listar tareas.
                console.log(activities.listArr);
            break;
        }
        
        // Guardar actividades.
        saveDB(activities.listArr);

        await pause();    

    } while (opt !== '0');
}

main();