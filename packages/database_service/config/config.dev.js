const { PORT, DB_USERNAME, DB_PASSWORD } = process.env

module.exports = {
    port: PORT || 4000,
    mongoURI: `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@qrrice-fmwoi.azure.mongodb.net/test?retryWrites=true`
}