const { Schema, model } = require('mongoose');

const PendingUserSchema = new Schema({
    email: { type: String, required: true, unique: true },
    nickname: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    activationLink: { type: String, required: true }, // Ссылка для активации аккаунта
    createdAt: { type: Date, default: Date.now, expires: '1d' } // Опционально: автоудаление через 24 часа
});

module.exports = model('PendingUser', PendingUserSchema);