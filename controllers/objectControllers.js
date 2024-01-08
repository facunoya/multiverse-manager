const fs = require('fs');
const path = require('path');

const objectControllers = {
    getObject: (req, res) => {
        res.render('./object/object')
    }


}
module.exports = objectControllers