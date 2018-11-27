const { PORT, SERVICE_DB_PORT, SERVICE_DB_URL, Q_URI } = process.env

module.exports = {
    port: PORT || 3000,
    serviceDatabase: {
        port: SERVICE_DB_PORT || 4000,
        url: SERVICE_DB_URL || 'http://localhost'
    },
    q: {
        uri: Q_URI || 'amqp://mikiigru:X7jeiUXGNspGd2d3yAax3kbVTJskhICI@mustang.rmq.cloudamqp.com/mikiigru'
    }
}