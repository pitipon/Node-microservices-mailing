const amqp = require('amqplib/callback_api')
const { q } = require('../config')

const qName = 'test_q'

amqp.connect(q.uri, (err, conn) => {
    if (err) throw new Error(err)

    conn.createChannel((err, ch) => {
        if (err) throw new Error(err)

        ch.assertQueue(qName, { durable: true })

        ch.consume(
            qName, 
            msg => {
                console.log('I got message', msg.content.toString())
            },
            { noAck: true }
        )
    })

})