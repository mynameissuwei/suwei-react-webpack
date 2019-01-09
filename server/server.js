const express = require('express')
const app = express()
const path = require('path')
const ReactDOMServer = require('react-dom/server')
const file = require('../dist/server.entry.js').default
const fs = require('fs')
const port = 8090

console.log(file)
const template = fs.readFileSync(path.join(__dirname,'../dist/index.html'),'utf8')

app.use('*',(req,res) => {
  const appString = ReactDOMServer.renderToString(file)
  res.send(appString)
})

app.listen(port,() => {
  console.log('it works')
})