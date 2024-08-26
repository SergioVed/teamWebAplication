const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TokenSchema = new Schema({
    refreshToken: {
        type: String,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
});

module.exports = mongoose.model("Token", TokenSchema);