// konfigurasi
const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const session = require('express-session');
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
require('dotenv').config()
var flash = require('connect-flash');
const http = require('http')
const cors = require('cors')

// routes
const relawan = require('./src/routes/relawan')
const informasi = require('./src/routes/informasiPohon');
const register = require('./src/routes/register')
const support = require('./src/routes/support')

// controller
const dashboard = require('./src/controller/dashboard.controller')
const editDashboard = require('./src/controller/edit.controller')
const supportPage = require('./src/controller/support.controller')
const location = require('./src/controller/location.controller')
const informationPage = require('./src/controller/information.controller')
const login = require('./src/controller/login.controller')

// modul
const User = require('./src/model/User')

// middleware
const distPath = path.join(__dirname, '../client/src/scripts/views/pages/home-user');
const herosPath = path.join(__dirname, '../client/src/public/heros');
const iconsPath = path.join(__dirname, '../client/src/public/icons');
const imagesPath = path.join(__dirname, '../client/src/public/images');
app.use(cors());
app.use(express.static(herosPath));
app.use(express.static(iconsPath));
app.use(express.static(imagesPath));
app.use(express.static(distPath));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())  
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: {
            secure: false,
        },
    }),
)

// session
passport.use(new LocalStrategy((username, password, done) => {
    if(username === 'admin' && password === 'password') {
        return done(null, { id: 1, username: 'admin' });
    } else {
        return done(null, false, { message: 'Incorrect username' });
    }
}))

app.use(passport.initialize())
app.use(passport.session())

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    if (err) {
      return done(err);
    }
    if (!user) {
      return done(new Error('User not found'));
    }
    done(null, user);
  });
});

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

const port = process.env.PORT || 5000;
const host = process.env.HOST || '0.0.0.0'
const server = http.createServer(app);
// database connection
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGODB_URL)
.then(() => {
    console.log('Connected to mongodb')
    server.listen(port, () => {
        console.log(`Linkar Hijau Berjalan pada ${host}:${port}`)
    })
})
.catch((err) => {
    console.log(err)
})

