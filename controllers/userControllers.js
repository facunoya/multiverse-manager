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
    },
    getUserEdit: async (req, res) => {
        fetch('http://localhost:3009/api/usertoupdate')
            .then(res => res.json())
            .then(data => { return res.json(data) })
    }



}
module.exports = userControllers