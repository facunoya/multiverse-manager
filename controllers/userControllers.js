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
    getEditUser: async (req, res) => {
        //res.render('./user/updateuser')
        let usuario
        const userToEdit = await fetch('http://localhost:3009/api/usertoupdate')
            .then(res => res.json())
            .then(data => { return usuario = data })
        await userToEdit
        return res.render('./user/updateuser', { usuario })
    },
    editUser: (req, res) => {
        return res.send('Hola Eze!')
    }



}
module.exports = userControllers