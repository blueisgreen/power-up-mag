require('dotenv').config()
const express = require('express'),
  serveStatic = require('serve-static'),
  history = require('connect-history-api-fallback'),
  cors = require('cors'),
  port = process.env.PORT || 5000

const app = express()

app.use(history())
app.use(cors())
app.use(serveStatic(__dirname + '/dist/spa'))
app.listen(port)
console.log(`Server started at http://localhost:${port}.`)
console.log(`Base service URI: ${process.env.API_BASE}.`)
