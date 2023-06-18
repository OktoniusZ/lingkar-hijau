const mongoose = require('mongoose')

const InformationSchema = mongoose.Schema({
    nama: {
        type: String,
        required: true
    },
    umur: {
        type: String,
        required: true
    },
    habitat: {
        type: String,
        required: true
    },
    deskripsi: {
        type: String,
        required: true
    },
    manfaat: {
        type: String,
        required: true
    },
    gambar: {
        type: String,
        required: true
    },
})

const Information = mongoose.model('Information', InformationSchema)

module.exports = Information