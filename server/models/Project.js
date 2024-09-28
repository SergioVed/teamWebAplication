const { default: mongoose } = require("mongoose");

const Project = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: false
    },
    images: {
        type: [String],
        required: false
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "user",
        required: true
    }
})

module.exports = mongoose.model('Project', Project)