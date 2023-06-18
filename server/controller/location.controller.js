const express = require('express')
const router = express.Router()
const path = require('path')

// middleware
const locationPath = path.join(__dirname, '../../client/src/scripts/views/pages/location');
const herosPath = path.join(__dirname, '../../client/src/public/heros');
const iconsPath = path.join(__dirname, '../../client/src/public/icons');
const imagesPath = path.join(__dirname, '../../client/src/public/images');
router.use(express.static(herosPath));
router.use(express.static(iconsPath));
router.use(express.static(imagesPath));
router.use(express.static(locationPath));

module.exports = router