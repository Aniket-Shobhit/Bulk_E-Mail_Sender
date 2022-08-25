const nodemailer = require('nodemailer');
const oAuth2Client = require('./gmailApi');

async function sendMail(receiver, subject, text, htmlTemplate) {
    try {
        const accessToken = await oAuth2Client.getAccessToken()

        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: process.env.user,
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken
            }
        }); 

        const mailOptions = {
            from: '"Aniket" <shobhitaniket3@gmail.com>',
            to: receiver,
            subject: subject,
            text: text,
            html: htmlTemplate,
        };

        const result = await transport.sendMail(mailOptions);
        return result;

    } catch(e) {
        return e;
    }
}

// sendMail().then(result => console.log('Email sent successfully!', result))
// .catch(err => console.log(err.message));

module.exports = sendMail;