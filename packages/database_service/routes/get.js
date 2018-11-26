const mongoose = require('mongoose')
const Mail = mongoose.model('Mail')

const pingHandler = (_, res) => {
    res.send('Healthy')
}

const mailHandler = async (_, res) => {
    console.log("mailHandler")
    let mails, error

    try {
        mails = await Mail.find()
    } catch (err) {
        error = err
    }

    res.send({
        message: 'Got Response from DB',
        service: 'Database Service',
        status: 200,
        payload: mails || error
    })
}

const singleMailHandler = async (req, res) => {
    let id = req.params.id
    let mail, error

    try {
        mail = await Mail.findById(id)
    } catch(err) {
        error = err
    }

    res.send({
        message: 'Got Response from DB',
        service: 'Database Service',
        status: 200,
        payload: mail || error
    })
}

module.exports = server => {
    server.get('/', pingHandler)
    .get('/mails', mailHandler)
    .get('/mails/:id', singleMailHandler)
    // server.get('/', async (_, res) => {
    //     const mail = new Mail({
    //         subject: 'Hello Subj',
    //         receiver: 'test@gmail.com',
    //         content: 'Hello =W='
    //     })

    //     await mail.save()

    //     res.send('Work')
    // })

    // server.get('/test', async (_, res) => {
    //     const mails = await Mail.find()

    //     res.send(mails)
    // })
}