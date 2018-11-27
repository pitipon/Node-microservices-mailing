const path = require('path')

const basePath = path.join(__dirname, '/packages')

module.exports = {
  apps : [
    // API GATEWAY
    {
      name: 'Gateway',
      script: basePath + '/gateway/server.js',
      watch: true,
      env: {
        PORT: 3000,
        SERVICE_DB_PORT: 4000,
        Q_URI: 'amqp://mikiigru:X7jeiUXGNspGd2d3yAax3kbVTJskhICI@mustang.rmq.cloudamqp.com/mikiigru'
      }
    },
  
    // DB SERVICE
    {
      name: 'DB Service',
      script: basePath + '/database_service/server.js',
      watch: true,
      env: {
        PORT: 4000,
        DB_USERNAME: 'mo',
        DB_PASSWORD: 'moldmold'
      }
    },

    // MAILING SERVICE
    {
      name: 'Mailing Service',
      script: basePath + '/mailing_service/server.js',
      watch: true,
      env: {
        Q_URI: 'amqp://mikiigru:X7jeiUXGNspGd2d3yAax3kbVTJskhICI@mustang.rmq.cloudamqp.com/mikiigru'
      }
    }
  ]
};
