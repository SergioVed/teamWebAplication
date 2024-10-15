const UserModel = require('../../models/User');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const mailService = require('./mailService');
const tokenService = require('./tokenService');
const UserDto = require('../../dtos/userDto');
const ApiError = require('../../exceptions/apiError');
const PendingUserModel = require('../../models/PendingUser');

module.exports.register = async (nickname, email, password) => { //здесь просто регистрация в pending
    const emailExists = await UserModel.findOne({ email });

    if (emailExists) {
        throw ApiError.BadRequest(`Користувач з поштовим адресом ${email} вже існує`);
    }

    const nicknameExists = await UserModel.findOne({ nickname });

    if (nicknameExists) {
        throw ApiError.BadRequest(`Користувач з нікнеймом ${nickname} вже існує`);
    }

    const salt = await bcrypt.genSalt(5);
    const hashPassword = await bcrypt.hash(password, salt);
    const activationLink = uuid.v4();

    const user = await PendingUserModel.create({ email, nickname, password: hashPassword, activationLink });
    await mailService.sendActivationMail(email, `${process.env.API_URL}api/activate/${activationLink}`);

    const userDto = new UserDto(user);
    // const tokens = tokenService.generateTokens({ ...userDto });
    // await tokenService.saveToken(userDto.id, tokens.refreshToken);

    // return { ...tokens, user: userDto }

    return { user: userDto }
}

module.exports.activate = async (activationLink) => { //тут просто поменять модель на pending
    const pendingUser = await PendingUserModel.findOne({ activationLink });

    if (!pendingUser) {
        throw ApiError.BadRequest('Некоректне посилання активації');
    }

    const user = await UserModel.create({
        email: pendingUser.email,
        nickname: pendingUser.nickname,
        password: pendingUser.password,
        isActivated: true
    });

    await PendingUserModel.deleteOne({ activationLink });

    const userDto = new UserDto(user);

    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return { ...tokens, user: userDto };
}

module.exports.login = async (email, password) => {
    const user = await UserModel.findOne({ email });

    if (!user) {
        throw ApiError.BadRequest('Користувач не знайден');
    }

    const isPasswordEquals = await bcrypt.compare(password, user.password);

    if (!isPasswordEquals) {
        throw ApiError.BadRequest('Неправильний пароль');
    }

    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });

    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return { ...tokens, user: userDto }
}

module.exports.logout = async (refreshToken) => {
    const token = await tokenService.removeToken(refreshToken);

    return token;
}

module.exports.refresh = async (refreshToken) => {
    if (!refreshToken) {
        throw ApiError.UnauthorizedError();
    }

    const userData = tokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = await tokenService.findToken(refreshToken);

    if (!userData || !tokenFromDb) {
        throw ApiError.UnauthorizedError();
    }

    const user = await UserModel.findById(userData.id);
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });

    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return { ...tokens, user: userDto }
}

module.exports.getAllUsers = async () => {
    const users = await UserModel.find();
    return users;
}

module.exports.getUser = async (id) => {
    const user = await UserModel.findById(id)
    if (!user) {
        throw ApiError.BadRequest('Користувача не знайдено');
    }
    return user
}

module.exports.addFullUserInfo = async (id, userData) => {
    const user = await UserModel.findById(id);

    if (!user) {
        throw ApiError.BadRequest('Користувач не знайденний');
    }

    Object.assign(user, userData);

    await user.save();

    return user;
}

module.exports.editUser = async (id, updateData) => {
    const user = await UserModel.findByIdAndUpdate(id, updateData, {new: true, runValidators: true})
    
    return user
}

module.exports.getUserGoogleData = async (accessToken) => {
    const response = await fetch(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${accessToken}`);

    const data = await response.json();
    console.log('data', data);
}