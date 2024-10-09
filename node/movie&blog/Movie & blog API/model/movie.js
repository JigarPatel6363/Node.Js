const mongoose = require("mongoose");

const movieShema = new mongoose.Schema({
    fullname: {
        type: String,
        required:true,
    },
    director: {
        type: String
    },
    cast: {
        type: String
    },
    genres: {
        type: String
    },
    language: {
        type: String
    },
    rating: {
        type: Number,
    }
});

module.exports = mongoose.model("Moviemodel", movieShema);