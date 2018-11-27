const amqp = require('amqplib/callback_api')
const { q } = require('../config')

const qName = 'test_q'

// Init global connect
let channel = null

// Fn push message to Q
const pushToMessageQ = (msg) => {
    console.log("pushToMessageQ msg:", msg)
 

    amqp.connect(q.uri, (err, conn) => {
        if (err) throw new Error(err)
    
        conn.createChannel((err, ch) => {
            if (err) throw new Error(err)
    
            ch.assertQueue(qName, { durable: true })
    
            // send msg to Q
            ch.sendToQueue(qName, Buffer.from(msg))

            setTimeout(() => {
                conn.close()
                process.exit(0)
            }, 1000)

            return { m: 'done' }
        })
    
    })

    return { m: 'done' }
}

module.exports = {
    pushToMessageQ
}