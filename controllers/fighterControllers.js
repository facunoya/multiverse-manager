const fs = require('fs');
const path = require('path');

const fighterControllers = {
    getFighter: (req, res) => {
        res.render('./fighter/fighter')
    },
    getAllFighters: async (req, res) => {
        try {
            const response = await fetch('http://localhost:3009/api/allfighters');
            const data = await response.json();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).send({ error: 'Error al obtener los luchadores' });
        }
    }
}



module.exports = fighterControllers