const express = require('express')
const router = express.Router()
const User = require('../model/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET_KEY = 'lingkarHijauApp'
const path = require('path')

// mengecek data user yang mencoba login
// kalo sesuai ketentuan, user akan dibawa ke halaman selanjutnya
router.post('/', async(req,res) => {
    const {email, password} = req.body;
    try {
        const existingUser = await User.findOne({email: email})
        if(!existingUser){
            return res.status(404).json({message: 'Email Not Found'})
        }

        const matchPassword = await bcrypt.compare(password, existingUser.password)

        if(!matchPassword){
            return res.status(401).json({ error: 'Invalid password' });
        }

        const token = jwt.sign({email: existingUser.email, id: existingUser._id},SECRET_KEY)
        // return res.redirect('/dashboard');
    } catch(error){
        res.status(500).json({message: "Something went wrong"})
    }
})

module.exports = router