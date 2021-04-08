//Require
const { validationResult } = require("express-validator");

// Services
const productService = require("../services/productService");
const userService = require("../services/userService");
const cartItemService = require("../services/cartItemService");


const cartController = {
    
    postProducts: async function (req, res) {
                
        try {
            let products = await productService.findAll();
            let categories = await categoryService.findAll();
            res.render("store/store",{ 
                notification: notification,
                message: message,
                errors: validateErrors,
                products, 
                categories 
            });
        } catch (error) {
            res.status(404).send(error.message);
        }
    },

};

module.exports = cartController;