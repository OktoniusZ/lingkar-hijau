const express = require('express')
const router = express.Router()
const Relawan = require('../model/Relawan')
const multer = require('multer')

// image upload
let storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, './uploads')
    },
    filename: (req,file,cb) => {
        cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname)
    }
})

let upload = multer({
    storage: storage,
}).single('image')


// menambahkan relawan
router.post('/', async(req,res) => {
    const relawan = new Relawan({
        nama: req.body.nama,
        tanggal: req.body.tanggal,
        jumlah: req.body.jumlah,
        jenis: req.body.jenis,
        lokasi: req.body.lokasi,
        umur: req.body.umur,
    })

    await Relawan.create(relawan)
    .then(() => {
        req.session.message = {
            type: 'success',
            message: 'user added successfully'
        };
        res.redirect('/dashboard') 
    })
    .catch((err) => {
        res.json({message: err.message, type: 'danger'})
    })
})

// mendapatkan semua data relawan
router.get('/', async(req,res) => {
    await Relawan.find({})
    .then((users) => {
        req.session.message = {
            type: 'success',
            message: 'user added successfully'
        };
        res.json((users))
    })
    .catch((err) =>{
        res.status(500).json({ error: 'Failed to retrieve relawan' });
    })
})
// menghapus relawan berdasarkan id
router.get('/delete/:id', (req,res) => {
    let id = req.params.id;
    Relawan.findByIdAndDelete(id)
    .then((result) => {
        req.session.message = {
            type: 'success',
            message: 'user deleted successfully'
        }
    })
    res.redirect('/dashboard');
})

// mengedit
router.get('/edit/:id', (req,res) => {
    let id = req.params.id;
    Relawan.findById(id)
    .then((support) => {
        req.session.message = {
            type: 'success',
            message: 'user added successfully'
        };
        res.json((support))
        // res.redirect('/edit-dashboard')
    })
    .catch(err => {
        res.json((users))
        // res.redirect('/')
    })
})

// mengupdate relawan berdasarkan id
router.post('/update/:id', async(req,res) => {
    let id = req.params.id;

    await Relawan.findByIdAndUpdate(id, {
        nama: req.body.nama,
        tanggal: req.body.tanggal,
        jumlah: req.body.jumlah,
        jenis: req.body.jenis,
        lokasi: req.body.lokasi,
        umur: req.body.umur,
    })
    .then(result => {
        req.session.message = {
            type: 'success',
            message: 'User updated succsessfully',
        }   
        // console.log(result)
        res.redirect('/dashboard')
    })
    .catch(err => {
        res.json({message: err.message, type: 'danger'})
    })
})


// mendapatkan data relawan berdasarkan id
router.get('/:id', async(req,res) => {
    try {
        const {id} = req.params
        const relawan = await Relawan.findById(id)
        res.status(200).json(relawan)
    } catch(error) {
        res.status(500).json({message: error.message})
    }
})

module.exports = router