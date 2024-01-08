const fs = require('fs');
const path = require('path');

const missionControllers = {
    getMission: (req, res) => {
        res.render('./mission/mission')
    }


}
module.exports = missionControllers