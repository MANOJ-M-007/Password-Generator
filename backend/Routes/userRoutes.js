const express = require ('express')
const router = express.Router()

const {
    registerUser,
    login,
    save,
    list
} = require ('../controller/userController')

const userProtect = require('../Middlewares/authMiddlewares');

router.route('/register').post(registerUser);
router.route('/login').post(login);
router.route('/save').post(userProtect,save);
router.route('/list').get(userProtect,list);

module.exports = router