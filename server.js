const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const apiRoutes = require('./routes/users')

const server = express()

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/users', apiRoutes)
server.use(express.static('public'))

module.exports = server