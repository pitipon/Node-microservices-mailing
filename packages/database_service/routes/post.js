const mongoose = require('mongoose')
const Mail = mongoose.model('Mail')

const mailHandler = async(req, res) => {
    console.log(2323232323, 'mail Handler')
    let { 
        body: {
            subject,
            receiver,
            content
        }} = req

    console.log(334343,subject)

    let error = ''

    if (!subject || !receiver || !content) {
        res.status(400).send({
            message: 'You forgot some import key',
            service: 'Database service',
            status: 400,
            payload: null
        })
    }

    let mail = new Mail({
        subject,
        receiver,
        content
    })
    console.log(44444,mail)

    try {
        mail = await mail.save()
    } catch(err) {
        error = err
    }

    res.send({
        message: 'Got response from DB', 
        service: 'Database service',
        status: 200,
        payload: mail || error
    })
}


module.exports = server => {
    server.post('/mails', mailHandler)
}