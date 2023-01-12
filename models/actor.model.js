const mongoose = require('mongoose')

const ActorSchema = new mongoose.Schema({
    name: {
        type: String,
        ref: "Movie"
    },
    gender: {
        type: String,
        enum: ['Male', 'Female']
    },
    dob: {
        type: String,
    },
    bio: {
        type: String,
    }
})

module.exports = mongoose.model('Actor', ActorSchema);