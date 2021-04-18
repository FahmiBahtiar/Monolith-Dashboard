const express = require('express')
const app = express()
const { PORT = 3333 } = process.env
const expressLayout = require('express-ejs-layouts')

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(expressLayout)

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
})