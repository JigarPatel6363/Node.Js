const mongoose = require("mongoose");

const blogShema = new mongoose.Schema({
    title: {
        type: String,
    },
    content: {
        type: String,
    },
    image: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }

});

module.exports = mongoose.model("blog", blogShema);