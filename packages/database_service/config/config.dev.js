const { PORT } = process.env

module.exports = {
    port: PORT || 4000,
    mongoURI: `mongodb+srv://${}:${}@qrrice-fmwoi.azure.mongodb.net/test?retryWrites=true`
}