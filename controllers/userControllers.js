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
        fetch('http://localhost:3009/api/crearuno', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser)
        })

        res.json(newUser);
    }


}
module.exports = userControllers