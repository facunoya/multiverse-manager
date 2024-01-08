const fs = require('fs');
const path = require('path');

const storeControllers = {
    getStore: (req, res) => {
        res.render('./store/store')
    }


}
module.exports = storeControllers