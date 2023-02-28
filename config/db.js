const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Connection to DB established");
    })
    .catch((err) => {
        console.log("Connection to DB failed");
    })