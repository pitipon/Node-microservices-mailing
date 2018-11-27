const { PORT, DB_USERNAME, DB_PASSWORD } = process.env

// console.log(33434343434343434343, DB_USERNAME)

let mongoURI = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@qrrice-fmwoi.azure.mongodb.net/test?retryWrites=true`

// console.log(33424234,mongoURI)
module.exports = {
    port: PORT || 4000,
    mongoURI
}