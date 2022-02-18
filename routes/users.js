//Author : Pratiksinh Makwana 
//Student Id : 301219863
//Date : 17-02-2022
//File : users.js

var express = require('express');
var router = express.Router();
let userController = require('../controllers/user')


router.get('/', userController.user);


//user
router.get('/pratik', userController.pratik);


// login
router.get('/login', userController.renderlogin);
router.post('/login', userController.login);

// register
router.get('/register', userController.renderregister);
router.post('/register', userController.register);


router.get('/ContactList', userController.ContactList);

//  logout
router.get('/logout', userController.logout);

module.exports = router;