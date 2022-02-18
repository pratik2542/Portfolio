var express = require('express');
var router = express.Router();
let userController = require('../controllers/user')

/* GET users listing. */
router.get('/', userController.user);

/* GET users listing. */
router.get('/pratik', userController.pratik);


// Sign-in
router.get('/login', userController.renderlogin);
router.post('/login', userController.login);

// Sign-in
router.get('/register', userController.renderregister);
router.post('/register', userController.register);


router.get('/ContactList', userController.ContactList);

// Sign out
router.get('/logout', userController.logout);

module.exports = router;