const { PORT, SERVICE_DB_PORT, SERVICE_DB_URL } = process.env

module.exports = {
    port: PORT || 3000,
    serviceDatabase: {
        port: SERVICE_DB_PORT || 4000,
        url: SERVICE_DB_URL || 'http://localhost'
    }
}