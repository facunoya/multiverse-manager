const fs = require('fs');
const path = require('path');

const apiControllers = {
    initialFunction: (req, res) => {
        res.render('./home')
    }

}
module.exports = apiControllers