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
    direction: [{
        name: String
    }],
    technologies: [{
        name: String
    }],
    englishLevel: String,
    education: [{
        name: {
            type: String,
            required: false
        },
        // year: {
        //     start: String,
        //     end: String
        // }
    }],
    experience: {
        answer: {
            type: String,
        },
        description: {
            type: String,
            required: false
        }
    },
    description: String,
    isActivated: {
        type: Boolean,
        default: false
    },
    activationLink: String,
})

module.exports = mongoose.model("User", UserSchema);