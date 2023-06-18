// konfigurasi
const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const session = require('express-session');
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
var flash = require('connect-flash');

// routes
const relawan = require('./routes/relawan')
const informasi = require('./routes/informasiPohon');
const register = require('./routes/register')
const support = require('./routes/support')

// controller
const dashboard = require('./controller/dashboard.controller')
const editDashboard = require('./controller/edit.controller')
const supportPage = require('./controller/support.controller')
const location = require('./controller/location.controller')
const informationPage = require('./controller/information.controller')
const login = require('./controller/login.controller')


// middleware
const distPath = path.join(__dirname, '../client/src/scripts/views/pages/home-user');
const herosPath = path.join(__dirname, '../client/src/public/heros');
const iconsPath = path.join(__dirname, '../client/src/public/icons');
const imagesPath = path.join(__dirname, '../client/src/public/images');
app.use(express.static(herosPath));
app.use(express.static(iconsPath));
app.use(express.static(imagesPath));
app.use(express.static(distPath));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())  
app.use(
    session({
        secret: 'my secret key',
        saveUninitialized: false,
        resave: false
    })
)

// session
app.use(passport.initialize())
app.use(passport.session())

passport.use(new LocalStrategy((username, password, done) => {
    if(username === 'admin' && password === 'password') {
        return done(null, { id: 1, username: 'admin' });
    } else {
        return done(null, false, { message: 'Incorrect username' });
    }
}))

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    if(id === 1){
        done(null, {id:1, username: 'admin'})
    } else {
        done(new Error('user not found'))
    }
})
app.use(flash());
app.post('/login', passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
    failureFlash: true // Enable failure flash messages
}))

app.get('/logout', (req,res) => {
    req.logout((err) => {
        if (err) { return next(err); }
        res.redirect('/login')
    });
})

const isAuthenticated = (req, res, next) => {
    if(req.isAuthenticated()){
        return next()
    }
    res.redirect('/login')
    // res.send("minimal login dulu")
}

// routes
app.use('/supportPage', supportPage)
app.use('/informationPage', informationPage)
app.use('/informasi', informasi)
app.use('/relawan', relawan)
app.use('/register', register)
app.use('/edit/:id', editDashboard)
app.use('/support', support)
app.use('/location', location)
app.use('/dashboard', isAuthenticated, dashboard)
app.use('/login', login)
app.get('/logout', (req,res) => {
    res.redirect('/login')
})

// database connection
mongoose.set('strictQuery', false)
mongoose.connect('mongodb+srv://lingkarHijau:dYNb9oXtCk1kIhy4@cluster0.xrsxrmk.mongodb.net/relawan?retryWrites=true&w=majority')
.then(() => {
    console.log('Connected to mongodb')
    app.listen('3000', () => {
        console.log(`Linkar Hijau Berjalan pada port 3000`)
    })
})
.catch((err) => {
    console.log(err)
})

