// Dependencies
const server = require('express')()
const {graphqlExpress, graphiqlExpress} = require('apollo-server-express')
const bodyParser = require('body-parser')

// Define Port from Dev or Prod
const { port } = require('./config')

// Define Schema
const schema = require('./data/schema') 

server.use(bodyParser.json())

server.use('/graphql', graphqlExpress({ schema }))

server.use('/gq', graphiqlExpress({ endpointURL: '/graphql' }))

server.get('/', (_, res) => {
    res.send('I am working now.')
})

server.listen(port, () => {
    console.log(`=W= Listening on port ${port}`)
})