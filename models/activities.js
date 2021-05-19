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

}

module.exports = Activities;