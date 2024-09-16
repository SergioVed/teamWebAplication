const { default: mongoose } = require("mongoose");

const Project = new mongoose.Schema({
    title: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false,
    },
    role: {
        type: String,
        required: false
    },
    link: {
        type: String,
        required: false
    },
    image: {
        type: String
    }
})

module.exports = mongoose.model('Project', Project)