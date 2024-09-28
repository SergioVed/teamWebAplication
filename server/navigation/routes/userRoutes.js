const userService = require('../services/userService');
const { validationResult } = require('express-validator');
const ApiError = require('../../exceptions/apiError');
const { OAuth2Client } = require('google-auth-library')

module.exports.register = async (req, res, next) => { //здесь просто регистрировать пользователя в PendingModel
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            const extractedErrors = errors.array().map(err => err.msg);
            return next(ApiError.BadRequest(`${extractedErrors}`, errors.array()));
        }

        const { nickname, email, password } = req.body;
        const userData = await userService.register(nickname, email, password);

        // res.cookie('refreshToken', userData.refreshToken, { maxAge: 7 * 24 * 60 * 60 * 1000, httpOnly: true })

        return res.json(userData);
    } catch (err) {
        next(err);
    }
}

module.exports.activate = async (req, res, next) => { //тут должны отправить данные в бд и генерироваться токен
    try {
        const activationLink = req.params.link;
        const userData = await userService.activate(activationLink);

        res.cookie('refreshToken', userData.refreshToken, { maxAge: 7 * 24 * 60 * 60 * 1000, httpOnly: true });

        return res.redirect(process.env.CLIENT_URL);
    } catch (err) {
        next(err);
    }
}

module.exports.login = async (req, res, next) => {
    try {
        const {email, password} = req.body;
        const userData = await userService.login(email, password);

        res.cookie('refreshToken', userData.refreshToken, { maxAge: 7 * 24 * 60 * 60 * 1000, httpOnly: true })

        return res.json(userData);

    } catch (err) {
        next(err);
    }

}

module.exports.logout = async (req, res, next) => {
    try {
        const {refreshToken} = req.cookies;
        const token = await userService.logout(refreshToken);
        
        res.clearCookie('refreshToken');
        return res.json(token);
    } catch (err) {
        next(err);
    }

}

module.exports.refresh = async (req, res, next) => {
    try {
        const {refreshToken} = req.cookies;
        const userData = await userService.refresh(refreshToken);

        res.cookie('refreshToken', userData.refreshToken, { maxAge: 7 * 24 * 60 * 60 * 1000, httpOnly: true })

        return res.json(userData);
    } catch (err) {
        next(err);
    }

}

module.exports.getUser = async (req, res, next) => {
    try {
        const userId = req.query.id;
        const user = await userService.getUser(userId)

        return res.json(user)
    } catch (err) {
        next(err);
    }
}

module.exports.getUsers = async (req, res, next) => {
    try {
        const users = await userService.getAllUsers();
        return res.json(users);
    } catch (err) {
        next(err);
    }
}

module.exports.addUser = async (req, res, next) => {
    try {
        const { id, updateData } = req.body;

        const user = await userService.addFullUserInfo(id, updateData);

        return res.status(200).json(user);
    } catch (error) {
        return res.status(404).json({ message: error.message });
    };
}

module.exports.authWithGoogle = async (req, res, next) => {
    try {
        res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.header('Referrer-Policy', 'no-referrer-when-downgrade');

        const redirectUrl = 'http://localhost:5000/api/oauth';

        const oAuth2Client = new OAuth2Client(
            process.env.GOOGLE_CLIENT_ID,
            process.env.GOOGLE_CLIENT_SECRET,
            redirectUrl
        );

        const authorizeUrl = oAuth2Client.generateAuthUrl({
            access_type: 'offline',
            scope: 'https://www.googleapis.com/auth/userinfo.profile openid',
            prompt: 'consent'
        });

        res.json({ url:authorizeUrl })
    } catch (err) {
        console.log('Error request', err);
    }
}

module.exports.getUserGoogleData = async (req, res, next) => {
    const authCode = req.query.code;

    console.log(authCode);
    try {
        const redirectURL = "http://localhost:5000/api/oauth"
        const oAuth2Client = new OAuth2Client(
            process.env.GOOGLE_CLIENT_ID,
            process.env.GOOGLE_CLIENT_SECRET,
            redirectURL
          );

        const tokenResponse =  await oAuth2Client.getToken(authCode);

        await oAuth2Client.setCredentials(tokenResponse.tokens);
        console.info('Tokens acquired.');

        const user = oAuth2Client.credentials;
        console.log('credentials',user);

        await userService.getUserGoogleData(oAuth2Client.credentials.access_token);

      } catch (err) {
        console.log('Error logging in with OAuth2 user', err);
    }


    res.redirect(303, 'http://localhost:3000/sign-up/information-page1');
}