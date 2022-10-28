const express = require('express');
const citycontroller = require('../Controller/city');

const router = express.Router();

router.get('',citycontroller.getAllcity)

module.exports = router; 