const express = require('express')
const router = express.Router()
const path = require('path')

// middleware
const herosPath = path.join(__dirname, '../../../client/src/public/heros');
const iconsPath = path.join(__dirname, '../../../client/src/public/icons');
const imagesPath = path.join(__dirname, '../../../client/src/public/images');
const informationPath = path.join(__dirname, '../../../client/src/scripts/views/pages/information');
router.use(express.static(herosPath));
router.use(express.static(iconsPath));
router.use(express.static(imagesPath));
router.use(express.static(informationPath));
console.log(informationPath)
module.exports = router