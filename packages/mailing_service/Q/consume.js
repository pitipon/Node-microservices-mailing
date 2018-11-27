const amqp = require('amqplib/callback_api')
const { q } = require('../config')

const sendEmail = require('../handler/sendMail')

const qName = 'test_q'

module.exports = () => {

    amqp.connect(q.uri, (err, conn) => {
        if (err) throw new Error(err)
    
        conn.createChannel((err, ch) => {
            if (err) throw new Error(err)
    
            ch.assertQueue(qName, { durable: true })
    
            ch.consume(
                qName, 
                msg => {
                    
                    if (msg.content.toString() != '') {
                        
                        try {
                            // Change String to Object
                            const mail = JSON.parse(msg.content.toString())                    
                            console.log('I receive email: ', mail)
                            sendEmail(mail)
        
                        } catch (e) {
                            console.log(e)
                            mail = msg
                        }
                        
                        ch.ack(msg)
                    } else {
                        console.log('no message')
                    }
     
                    
                },
                { noAck: false }
            )
        })
    
    })
    
}