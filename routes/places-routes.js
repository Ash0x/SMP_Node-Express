const express = require('express')

const router = express.Router()

const PlacesControllers = require('../controllers/places-controller')

router.get('/:pid', PlacesControllers.getPlaceById)

router.get('/user/:uid', PlacesControllers.getPlaceByUserId)

router.post('/', PlacesControllers.createPlace)

module.exports = router
