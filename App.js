const express = require('express')
const path = require('path');
var parseUrl = require('body-parser')
const maths = require('./maths.js')
var fs = require('fs')

process.on('uncaughtException', function(er) {
  console.log
});
process.on('unhandledRejection', function(er) {
  console.log("err")
});


const app = express()

let encodeUrl = parseUrl.urlencoded({ extended: false })

const publicDirPath = path.join(__dirname, './node-files')

app.use(express.static(publicDirPath, {extensions: ['html']}))

app.use(parseUrl.json())

app.get('/', (req, res) => {
  res.sendFile(publicDirPath + 'index.html')
})

app.listen(4000)