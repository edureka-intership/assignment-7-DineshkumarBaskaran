const express = require('express');
const mealtypecontroller = require('../Controller/mealtype');

const router = express.Router();

router.get('',mealtypecontroller.getAllmealtypes)

module.exports = router; 