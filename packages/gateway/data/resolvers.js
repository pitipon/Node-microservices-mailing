const axios = require('axios')
const { serviceDatabase } = require('../config')
const { pushToMessageQ } = require('../Q/connect')

const databaseURL = `${serviceDatabase.url}:${serviceDatabase.port}`

const get = async (path) => (await axios.get(`${databaseURL}/${path}`)).data.payload
const post = async (path, body) => (await axios.post(`${databaseURL}/${path}`, { ...body })).data.payload

const resolvers = {
    Query: {
        mails: () => get(`mails`),
        mail: (_, {id}) => get(`mails/${id}`)
    },
    Mutation: {
        mail: (_, args) => {
            let result, error
            console.log(32324234234234,"hello")

            try {
                result = post('mails', args)
            } catch (e) {
                error = e
            }

            console.log("Mutation gq", args)

            pushToMessageQ(JSON.stringify(args))

            console.log(343423432, result)

            return result || error
        }
    }
}

module.exports = resolvers