const express = require('express')
const router = express.Router()
const Support = require('../model/Support')
const path = require('path')

// menampilkan data support
router.get('/', async(req,res) => {
    await Support.find({})
    .then((supports) => {
        res.json((supports))
    })
    .catch((err) => {
        res.json({message: err.message, type: 'danger'})
    })
})

// menambahkan data support
router.post('/', async(req,res) => {
    const support = new Support({
        nama: req.body.nama,
        email: req.body.email,
        nomorHp: req.body.nomorHp,
        pesan: req.body.pesan
    })

    await Support.create(support)
    .then(() => {
        req.session.message = {
            type: 'success',
            message: 'support added successfully'
        };
        res.redirect('/');
    })
    .catch((err) => {
        res.json({message: err.message, type: 'danger'})
    })
})


// menghapus data support
router.delete('/:id', async(req,res) => {
    let id = req.params.id;
    Support.findByIdAndDelete(id)
    .then((result) => {
        req.session.message = {
            type: 'success',
            message: 'user deleted successfully'
        }
        res.send('Berhasil Dihapus')
    })
})


module.exports = router