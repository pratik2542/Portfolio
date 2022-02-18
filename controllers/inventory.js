/*
File Name - inventory.js
Student Name - Pratiksinh Makwana
Student ID - 301219863
Date - 17-02-2022
*/



const { mongo, Mongoose } = require('mongoose');
const inventory = require('../models/inventory');
const { db } = require('../models/inventory');
let Inventory = require('../models/inventory');

//contact list with sorting
exports.list = function(req, res, next){
    Inventory.find((err, inventoryList)=>{
       
        if(err)
        {
            return console.error(err);
        }
        else
        {
           
    
            res.render(
                'inventory/list', 
                { 
                    
                    title: 'Contact List',
                    InventoryList :  inventoryList.sort((a, b) => a.name.localeCompare(b.name)),
                    
                    userName: req.user ? req.user.username : '' 
                }
            );
        }
    });
}

//display page
exports.displayAddPage = (req, res, next) => {
    
    let newItem = Inventory();

    res.render('inventory/add_edit', {
        title: 'Add New Contact',
        item: newItem,
        userName: req.user ? req.user.username : '' 
    })          
}

//process page
exports.processAddPage = (req, res, next) => {
    
    let newItem = Inventory({
        _id: req.body.id,
        name: req.body.name,
        number: req.body.number,
        email: req.body.email,
        
    });

    Inventory.create(newItem, (err, item) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            console.log(item);
            res.redirect('/inventory/list');
        }
    });
}

//edit
exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;
    Inventory.findById(id, (err, itemToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('inventory/add_edit', {
                title: 'Edit Item', 
                item: itemToEdit,
                userName: req.user ? req.user.username : '' 
            })
        }
    });
}

//edit process page
exports.processEditPage = (req, res, next) => {
    let id = req.params.id
    
    let updatedItem = Inventory({
        _id: req.body.id,
        name: req.body.name,
        number: req.body.number,
        email: req.body.email,
        
    });

    

    Inventory.updateOne({_id: id}, updatedItem, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {

            res.redirect('/inventory/list');
        }
    });
}

// for delete
exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Inventory.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            
            res.redirect('/inventory/list');
        }
    });
}

