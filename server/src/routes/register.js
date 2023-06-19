const express = require('express')
const router = express.Router()
const User = require('../model/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET_KEY = 'lingkarHijauApp'

// mengecek data user yang akan mencoba register
// kalo sesuai dengan ketentuan, data akan disimpon ke database
router.post('/', async(req,res) => {
    const {username, email, password} = req.body;

    try {
        const existingUser = await User.findOne({email: email})
        if(existingUser){
            return res.status(400).json({message: "Email already exist"})
        }
        const hashedPassword = await bcrypt.hash(password, 10)

        const result = await User.create({
            email: email,
            password: hashedPassword,
            username: username
        })

        const token = jwt.sign({email: result.email, id: result.id}, SECRET_KEY)
        res.status(201).json({user: result, token: token})
    } catch(error){
        res.status(500).json({message: "Something went wrong"})
    }
})

module.exports = router