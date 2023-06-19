const express = require('express')
const router = express.Router()
const path = require('path')

// middleware
const loginPath = path.join(__dirname, '../../../client/src/scripts/views/pages/login');
const herosPath = path.join(__dirname, '../../../client/src/public/heros');
const iconsPath = path.join(__dirname, '../../../client/src/public/icons');
const imagesPath = path.join(__dirname, '../../../client/src/public/images');
router.use(express.static(loginPath));
router.use(express.static(herosPath));
router.use(express.static(iconsPath));
router.use(express.static(imagesPath));


module.exports = router