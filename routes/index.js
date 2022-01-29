//Author : Pratiksinh Makwana 
//Student Id : 301219863
//Date : 29-01-2022


var express = require('express');
var router = express.Router();
let indexController = require('../controllers/index')

/* GET home page. */
router.get('/', indexController.home);

/* GET Project page. */
router.get('/projects', indexController.projects);

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About' });
});


module.exports = router;
