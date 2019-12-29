const sgMail = require('@sendgrid/mail')
// const sendgridAPIkey = ''
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// sgMail.send({
//     to: 'long.lythien@gmail.com',
//     from: 'long.lythien@gmail.com',
//     text: 'I hope this one actually get to you'
// }).catch((error) => {
//     console.log(error)
// })

// const msg = {
//     to: 'long.lythien@gmail.com',
//     from: 'long.lythien@gmail.com',
//     subject: 'Testing the sendgrid package',
//     text: 'Please receive this email'
// }

// sgMail.send(msg)

const sendWelcomeEmail = (email, name) => {
    const msg = {
        to: email,
        from: 'long.lythien@gmail.com',
        subject: 'Thanks for joining in!',
        text: 'Welcome to the app, ' + name + '. Let me know how you get along with the app',
    }
    sgMail.send(msg)
}

const sendCancelEmail = (email, name) => {
    const msg = {
        to: email,
        from: 'long.lythien@gmail.com',
        subject: 'Sorry to see you leave!',
        text: `Goodbye, ${name}. I hope to see you back sometime soon.`
    }
    sgMail.send(msg)
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}