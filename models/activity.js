const { v4: uuidv4 } = require('uuid');

class Activity {
    id = '';
    desc = '';
    completedIn = null;

    constructor(desc) {
        this.id = uuidv4();
        this.desc = desc;
        this.completedIn = null;
    }
}

module.exports = Activity;