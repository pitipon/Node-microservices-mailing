// Dependencies
const server = require('express')()
const bodyParser = require('body-parser')

// Define Port from Dev or Prod
const config = require('./config')
const { port } = config

server.use(bodyParser.json())
require('./dbUtil')(config)
require('./routes/get')(server)
require('./routes/post')(server)

server.listen(port, () => {
    console.log(`=W= Listening on port ${port}`)
})