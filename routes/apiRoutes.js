const express = require('express')
const router = express.Router()
const apiControllers = require('../controllers/apiControllers')
const fighterControllers = require('../controllers/fighterControllers')
const userControllers = require('../controllers/userControllers')
const objectControllers = require('../controllers/objectControllers')
const storeControllers = require('../controllers/storeControllers')
const missionControllers = require('../controllers/missionControllers')


//API
router.get('/', apiControllers.initialFunction)
//FIGHTER
router.get('/fighter', fighterControllers.getFighter)
router.get('/fighter/allfighter', fighterControllers.getAllFighters)
//USER
router.get('/user', userControllers.getUser)
//OBJECT
router.get('/object', objectControllers.getObject)
//STORE
router.get('/store', storeControllers.getStore)
//MISSION
router.get('/mission', missionControllers.getMission)

module.exports = router