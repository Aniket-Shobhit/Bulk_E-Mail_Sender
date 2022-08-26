const nodemailer = require('nodemailer');
const oAuth2Client = require('./gmailApi');

async function gmailSend(receiver, subject, htmlTemplate) { 
    const CLIENT_ID = process.env.CLIENT_ID;
    const CLIENT_SECRET = process.env.CLIENT_SECRET;
    const REFRESH_TOKEN = process.env.REFRESH_TOKEN;
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
            },
            maxMessages: 200,
            pool: true,
            secure: true
        }); 

        const mailOptions = {
            from: '"Aniket" <shobhitaniket3@gmail.com>',
            to: receiver,
            subject: subject,
            html: htmlTemplate,
        };

        const result = await transport.sendMail(mailOptions);
        return result;

    } catch(e) {
        return e;
    }
}

// gmailSend().then(result => console.log('Email sent successfully!', result))
// .catch(err => console.log(err.message));

module.exports = gmailSend;