const express = require('express')
const app = express()
const { PORT = 3333 } = process.env
const expressLayout = require('express-ejs-layouts')


const setDefault = (req, res, next) => {
    res.locals.contentName = "Default"

next()}

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(expressLayout)
app.set('layout', 'layouts/default')


app.use(express.urlencoded({ extended: false }))
app.use(express.json())



const session = require('express-session')
app.use(
  session({
    secret: 'Rahasia',
    resave: false,
    saveUninitialized: false
  })
)

// Passport
const passport = require('./lib/passport') 
app.use(passport.initialize())
app.use(passport.session())

const router = require('./router')
app.use(router)

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
})