const express = require('express');
const dotenv = require('dotenv');
dotenv.config({path:'./config/.env'});

const port = process.env.PORT;
const app = express();

app.listen(port, () => {
    console.log('Server is up and runnning on port ' + port);
})