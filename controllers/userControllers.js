const fs = require('fs');
const path = require('path');

const userControllers = {
    getUser: (req, res) => {
        res.render('./user/createuser')
    },
    createUser: async (req, res) => {
        const newUser = { ...req.body };
        newUser.money = parseInt(newUser.money, 10);
        console.log({ ...newUser });
        res.json(newUser);
    }


}
module.exports = userControllers