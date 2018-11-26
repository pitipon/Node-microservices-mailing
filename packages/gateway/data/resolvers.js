const axios = require('axios')
const { serviceDatabase } = require('../config')

const databaseURL = `${serviceDatabase.url}:${serviceDatabase.port}`

const get = async (path) => (await axios.get(`${databaseURL}/${path}`)).data.payload
const post = async (path, body) => (await axios.post(`${databaseURL}/${path}`, { ...body })).data.payload

const resolvers = {
    Query: {
        mails: () => get(`mails`),
        mail: (_, {id}) => get(`mails/${id}`)
    },
    Mutation: {
        mail: (_, args) => post(`mails`, args)
    }
}

module.exports = resolvers