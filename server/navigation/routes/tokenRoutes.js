const tokenService = require('../services/tokenService');

module.exports.validateToken = (req, res, next) => {
    try {
        const { accessToken } = req.body;
        const userData = tokenService.validateAccessToken(accessToken);
        
        if (userData) {
            res.json({ valid: true, userId: userData.id });
        } else {
            res.json({ valid: false });
        }
    } catch (err) {
        next(err);
    }
}