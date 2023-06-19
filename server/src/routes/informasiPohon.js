const express = require('express')
const router = express.Router()
const Information = require('../model/Informasi')
const multer = require('multer')



// mendapatkan semua data informasi pohon
router.get('/', async(req,res) => {
    try {
        const information = await Information.find({})
        res.status(200).json(information)
    } catch(error) {
        console.log(res.status(500).json({message: error.message}))
    }
})

// mendapatkan data informasi pohon berdasarkan id
router.get('/:id', async(req,res) => {
    try {
        const {id} = req.params;
        const information = Information.findById(id);
        res.status(200).json(information)
    } catch(error) {
        console.log(res.status(500).json({message: error.message}))
    }
})

// menambahkan data informasi pohon
router.post('/', async(req,res) => {
    try {
        const information = await Information.create(req.body);
        res.status(200).json(information)
    } catch(error) {
        console.log(res.status(500).json({message: error.message}))
    }
})

// menghapus data informasi pohon berdasarkan id
router.delete('/:id', async(req,res) => {
    try {
        const {id} = req.params;
        const information = await Information.findByIdAndDelete(id)
        res.status(200).json(information)
    } catch(error) {
        console.log(res.status(500).json({message: error.message}))
    }
})

// mengupdate data informasi pohon berdasarkan id
router.put('/:id', async(req,res) => {
    try {
        const {id} = req.params;
        const information = await Information.findByIdAndUpdate(id, req.body);
        // jika data tidak ditemukan
        if(!information){
            return res.status(404).json({message: `cannot find any product with ID ${id}`})
        }
        // jika data ditemukan
        const updatedInformation = await Information.findById(id);
        res.status(200).json(updatedInformation)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})



module.exports = router