const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    nickname: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        firstName: {
            type: String,
        },
        secondName: {
            type: String,
        }
    },
    direction: [String],
    technologies: [String],
    englishLevel: String,
    education: [{
        name: String,
        year: {
            start: String,
            end: String
        }
    }],
    experience: {
        answer: {
            type: String,
        },
        description: String
    },
    description: String,
    isActivated: {
        type: Boolean,
        default: false
    },
    activationLink: String,
})

module.exports = mongoose.model("User", UserSchema);