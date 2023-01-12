const mongoose = require('mongoose')

const ProducerSchema = new mongoose.Schema({
    name: {
        type: String
    },
    gender: {
        type: String,
        enum: ['Male', 'Female']
    },
    dob: {
        type: String
    },
    bio: {
        type: String
    }
})

module.exports = mongoose.model('Producer', ProducerSchema);