const mongoose = require('mongoose')


const relawanSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: true
    },
    tanggal: {
        type: String,
        required: true
    },
    jumlah: {
        type: String,
        required: true
    },
    jenis: {
        type: String,
        required: true
    },
    lokasi: {
        type: String,
        required: true
    },
    umur: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Relawan', relawanSchema);