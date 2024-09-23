const mongoose = require('mongoose');

function connectToDB(url) {
    mongoose.connect(url)
        .then(() => {
            console.log("MongoDb Connected");
        })
        .catch((error) => {
            console.log("Error:" + error);
        })
}

module.exports = { connectToDB };