const fs = require('fs');
const path = require('path');

const userControllers = {
    getUser: (req, res) => {
        res.render('./user/user')
    }


}
module.exports = userControllers