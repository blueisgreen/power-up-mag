require('dotenv').config()
const express = require('express')
const fs = require('fs')
const https = require('https')
const serveStatic = require('serve-static')
const history = require('connect-history-api-fallback')
const cors = require('cors')
const port = process.env.PORT || 5000
const app = express()

app.use(history())
app.use(cors())
app.use(serveStatic(__dirname + '/dist/spa'))

const server = https.createServer(
  {
    key: fs.readFileSync('../local/server.key'),
    cert: fs.readFileSync('../local/server.cert'),
  },
  app
)
server.listen(port, () => {
  console.log(`Server listening over https at port ${port}.`)
  console.log(`Base service URI: ${process.env.API_BASE}.`)
})
