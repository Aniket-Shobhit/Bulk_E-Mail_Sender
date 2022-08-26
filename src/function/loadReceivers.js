const fs = require('fs');
const path = require('path');

const loadReceivers = () => {
    try {
        const fullPath = path.join(__dirname,"../receivers.json");
        const dataBuffer = fs.readFileSync(fullPath);
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch {
        return [];
    }
};

module.exports = loadReceivers;