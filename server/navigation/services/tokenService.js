const jwt = require('jsonwebtoken');
const TokenModel = require('../../models/Token');

module.exports.generateTokens = (userData) => {
    const accessToken = jwt.sign(userData, process.env.JWT_ACCESS_SECRET, { expiresIn: '1h' });
    const refreshToken = jwt.sign(userData, process.env.JWT_REFRESH_SECRET, { expiresIn: '7d' });

    return {
        accessToken,
        refreshToken
    }
}

module.exports.validateAccessToken = (token) => {
    try {
        const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
        return userData;
    } catch (err) {
        return null;
    }
}

module.exports.validateRefreshToken = (token) => {
    try {
        const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
        return userData;
    } catch (err) {
        return null;
    }
}

module.exports.saveToken = async (userId, refreshToken) => {
    const tokenData = await TokenModel.findOne({ user: userId });

    if (tokenData) {
        tokenData.refreshToken = refreshToken;

        return tokenData.save();
    }

    const token = await TokenModel.create({ user: userId, refreshToken });
    return token;
}

module.exports.removeToken = async (refreshToken) => {
    const tokenData = await TokenModel.deleteOne({ refreshToken });

    return tokenData;
}

module.exports.findToken = async (refreshToken) => {
    const tokenData = await TokenModel.findOne({ refreshToken });

    return tokenData;
}