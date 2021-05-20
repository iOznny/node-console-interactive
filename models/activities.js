const Activity = require('./activity');

/**
 * Listado
 * uuid-123-123: { }
 */

class Activities {

    _list = {};

    get listArr() {
        const list = [];
        Object.keys(this._list).forEach( k => {
            const activity = this._list[k];
            list.push(activity);
        });

        return list;
    }

    constructor() {
        this._list = {};
    }

    // Create Activity.
    createActivity(desc = '') {
        const activity = new Activity(desc);
        this._list[activity.id] = activity;
    }

    // Load Activities.
    loadActivities(activities = []) {
        activities.forEach(a => {
            this._list[a.id] = a;
        });
    }

    // List Completed.
    listCompleted() {
        console.log();
        
        this.listArr.forEach((a, i) => {
            const idx = `${ i + 1 }`.green;
            const { desc, completedIn } = a;
            const status = (completedIn) ? 'Completada'.green : 'Pendiente'.red;
            console.log(`${ idx } ${ desc } :: ${ status }`);
        });
    }

    // List Activities Status (Completed / Pending)
    listActivitiesStatus(completed = true) {
        let idx = 0;

        console.log();
        this.listArr.forEach(a => {            
            const { desc, completedIn } = a;
            const status = (completedIn) ? 'Completada'.green : 'Pendiente'.red;

            if (completed) {
                if (completedIn) {
                    idx += 1;
                    console.log(`${ (idx + '.').green } ${ desc } :: ${ completedIn.green }`); 
                }
            } else {
                if (!completedIn) {
                    idx += 1;
                    console.log(`${ (idx + '.').red } ${ desc } :: ${ status }`); 
                }
            }
        });
    }

    // Delete Activity
    deleteActivity(id = '') {
        if (this._list[id]) {
            delete this._list[id];
        }
    }

    // Update Activities Status
    updateActivities(ids = []) { 
        ids.forEach(id => {
            const activity = this._list[id];

            if (!activity.completedIn) {
                activity.completedIn = new Date().toISOString();
            }
        });

        this.listArr.forEach(a => {
            if (!ids.includes(a.id)) {
                this._list[a.id].completedIn = null;
            }
        });
    }

}

module.exports = Activities;