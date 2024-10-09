const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/movie")
    .then(() => console.log('Connected!')).catch((err) => {
        console.log(err);
    });

const userSchema = new mongoose.Schema({
    username: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
});

module.exports = mongoose.model("User", userSchema);