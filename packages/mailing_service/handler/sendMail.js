const { mailjet } = require('../config')
const Mailjet = require('node-mailjet').connect(mailjet.apiPublic, mailjet.apiSecret)

module.exports = async (mail) => {
    const request = Mailjet.post('send').request({
        FromEmail: 'pitipon@gmail.com',
        FromName: 'mo',
        Subject: mail.subject,
        'Text-part': mail.content,
        Recipients: [
            { Email: mail.receiver }
        ]
    })

    console.log("Send Email:", request.body)
}