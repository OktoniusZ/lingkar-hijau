const mongoose = require('mongoose')

const SupportSchema = mongoose.Schema({
    nama: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    nomorHp: {
        type: String,
        required: true,
    },
    pesan: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Support', SupportSchema);