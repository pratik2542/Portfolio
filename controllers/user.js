/*
File Name - inventory.js
Student Name - Pratiksinh Makwana
Student ID - 301219863
Date - 17-02-2022
*/

const inventory = require('../models/inventory');
let User = require('../models/user');
let passport = require('passport');

exports.user = function(req, res, next) {
    res.render('user', { 
        title: 'Users',
        name: 'Student'
    });
}

exports.pratik = function(req, res, next) {
    res.render('user', { 
        title: 'User',
        name: 'pratik'
    });
}

//error page

function getErrorMessage(err) {
    console.log("--> Erro: " + err);
    let message = '';
  
    if (err.code) {
      switch (err.code) {
        case 11000:
        case 11001:
          message = 'Username already exists';
          break;
        default:
          message = 'Something went wrong';
      }
    } else {
      for (var errName in err.errors) {
        if (err.errors[errName].message) message = err.errors[errName].message;
      }
    }
  
    return message;
  };

  // render register page
  module.exports.renderregister = function(req, res, next) {
    if (!req.user) {
  
      // creates a empty new user object.
      let newUser = User();
  
      res.render('auth/register', {
        title: 'Register Here',
        messages: req.flash('error'),
        user: newUser
      });
  
    } else {
      return res.redirect('/');
    }
  };

  //registration 
module.exports.register = function(req, res, next) {
    if (!req.user) {
      console.log(req.body);
  
      let user = new User(req.body);

      console.log(user);
  
      user.save((err) => {
        if (err) {
          let message = getErrorMessage(err);
  
          req.flash('error', message);
          // return res.redirect('/users/signup');
          return res.render('auth/register', {
            title: 'Register Here',
            messages: req.flash('error'),
            user: user
          });
        }
        return res.redirect('/users/login');
        // req.login(user, (err) => {
        //   if (err) return next(err);
        //   return res.redirect('/');
        // });
      });
    } else {
      return res.redirect('/users/login');
    }
  };

//render login page
  
  module.exports.renderlogin = function(req, res, next) {
    if (!req.user) {
      res.render('auth/login', {
        title: 'Login',
        messages: req.flash('error') || req.flash('info')
      });
    } else {
      console.log(req.user);
      return res.redirect('/inventory/list');
    }
  };

  module.exports.ContactList = function(req, res, next) {
   
      res.render('index', { title: 'ContactList' });
  
}
 

//login
module.exports.login = function(req, res, next){
    passport.authenticate('local', {   
      successRedirect: req.session.url || '/inventory/list',
      failureRedirect: '/users/login',
      failureFlash: true
    })(req, res, next);
    delete req.session.url;
  } 

//logout 
  module.exports.logout = function(req, res, next) {
    req.logout();
    res.redirect('/');
  };