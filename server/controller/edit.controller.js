const express = require('express')
const router = express.Router()
const path = require('path')


// middleware
const editPath = path.join(__dirname, '../../client/src/scripts/views/pages/edit-dashboard');
const herosPath = path.join(__dirname, '../../client/src/public/heros');
const iconsPath = path.join(__dirname, '../../client/src/public/icons');
const imagesPath = path.join(__dirname, '../../client/src/public/images');
router.use(express.static(editPath));
router.use(express.static(herosPath));
router.use(express.static(iconsPath));
router.use(express.static(imagesPath));


module.exports = router