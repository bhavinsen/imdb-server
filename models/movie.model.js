const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    yearOfRelease: {
        type: String,
        required:true
    },
    poster: {
        type: String,
        required:true
    },
    plot: {
        type: String,
        required:true
    },
    actor: {
        type: String,
        ref: "Actor",
        required:true
    },
    producer: {
        type: String,
        required:true
    }
})

module.exports = mongoose.model('Movie', MovieSchema);