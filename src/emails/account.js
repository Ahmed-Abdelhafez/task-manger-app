const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'Ahmed.fci_0518@fci.kfs.edu.eg',
        subject: 'Thanks for join us',
        text: `Welcome to the app, ${name}. let me know how you get a long with the app`
    })
}
const sendGoodbyeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'Ahmed.fci_0518@fci.kfs.edu.eg',
        subject: 'Goodbye',
        text: `We are sorry for seeing you go, ${name}.`
    })
}
module.exports = {
    sendWelcomeEmail,
    sendGoodbyeEmail
}