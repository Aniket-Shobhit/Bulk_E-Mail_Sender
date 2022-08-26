const gmailSend = require('../gmailSend');
const htmlTemp = require('../template/demoTemplate');           //change this to your own template to send your custom mail

const sendMail = async (receivers, subject) => {
    try {
        await receivers.forEach(async (receiver) => {
            await gmailSend(receiver, subject, htmlTemp);
        });
        console.log('Email Sent Successfully!');
    } catch(e) {
        console.log(e);
    }
};

module.exports = sendMail;