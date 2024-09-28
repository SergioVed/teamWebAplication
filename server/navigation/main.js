const Router = require('express').Router
const router = new Router();
const { body } = require('express-validator');

const userRoutes = require('./routes/userRoutes');
const tokenRoutes = require('./routes/tokenRoutes');

router.post('/sign-up',
    body('nickname').isLength({ min: 2, max: 32}).withMessage('Нікнейм має бути від 2 до 32 символів'),
    body('email').isEmail().withMessage('Вказана неіснуюча пошта'),
    body('password').isLength({ min: 8 }).withMessage('Пароль має бути довжиною від 8 символів'),
    userRoutes.register);

router.post('/sign-in', userRoutes.login);
router.get('/get-user', userRoutes.getUser)
router.post('/log-out', userRoutes.logout);
router.get('/activate/:link', userRoutes.activate);
router.get('/refresh', userRoutes.refresh);
router.get('/users', userRoutes.getUsers);
router.post('/add-user/:id', userRoutes.addUser);
router.post('/validate-token', tokenRoutes.validateToken);
router.post('/auth-with-google', userRoutes.authWithGoogle);
router.get('/oauth', userRoutes.getUserGoogleData);


module.exports = router;