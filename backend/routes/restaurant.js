const express = require('express');
const Restaurantcontroller = require('../Controller/restaurant');

const router = express.Router();

router.get('',Restaurantcontroller.getAllRestaurants)

// router.get('/:cName',Restaurantcontroller.getRestaurantsBycity)

router.post('/Filter',Restaurantcontroller.getRestaurantsByFilter)

router.get('/:cID',Restaurantcontroller.getRestaurantsBycityID)
router.get('/details/:rName',Restaurantcontroller.getRestaurantsByName)

module.exports = router; 