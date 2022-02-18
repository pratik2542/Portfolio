//Author : Pratiksinh Makwana 
//Student Id : 301219863
//Date : 17-02-2022
//File : inventory.js

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const inventory = require('../models/inventory');

let inventoryController = require('../controllers/inventory')

// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        req.session.url = req.originalUrl;
        return res.redirect('/users/login');
    }
    next();
}

router.get('/List', inventoryController.list);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add',requireAuth, inventoryController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add',requireAuth, inventoryController.processAddPage);

// Routers for edit
router.get('/edit/:id',requireAuth, inventoryController.displayEditPage);
router.post('/edit/:id', requireAuth,inventoryController.processEditPage);

// Delete
router.get('/delete/:id',requireAuth, inventoryController.performDelete);


module.exports = router;