const Router = require('express').Router
const router = new Router();
const { body } = require('express-validator');

const userRoutes = require('./routes/userRoutes');
const tokenRoutes = require('./routes/tokenRoutes');
const projectRoutes = require('./routes/projectRoutes');
const { checkAuth } = require('../middlewares/checkAuth');
const fileMidleWare = require('../middlewares/file');

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
router.put('/edit-user', checkAuth, userRoutes.editUser)

// project routes
router.post('/add', checkAuth, fileMidleWare, 
    body('title').isLength({ min: 2, max: 32}).withMessage('Назва проекту має бути від 2 до 32 символів'),
    body('description').isLength({ min: 20, max: 300}).withMessage('Опис проекту має бути від 20 до 300'),
    body('role').isLength({ min: 3 }).withMessage('Роль має бути від 3 символів'),
projectRoutes.create);
router.get('/getAll', checkAuth, projectRoutes.getAll);
router.put('/edit', checkAuth, projectRoutes.edit)

module.exports = router;