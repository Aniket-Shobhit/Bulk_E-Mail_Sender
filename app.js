const dotenv = require('dotenv');
dotenv.config({path:'./config/.env'});

const sendMail = require('./src/function/sendMail');
const loadReceivers = require('./src/function/loadReceivers');

const send = () => {
    const data = loadReceivers();
    const receivers = data.receivers;
    const subject = data.subject;
    sendMail(receivers, subject);
};

send();