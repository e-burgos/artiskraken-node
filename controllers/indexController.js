// Services
const productService = require("../services/productService");
const typeService = require("../services/typeService");
const { Product } = require("../database/models");

// Index controller
const indexController = {

    // GET home
    home: async (req, res) => {
        
        // Notifications
        const validateErrors = req.flash('validateErrors')
        const message = req.flash('message');
        let notification = null;
        if(validateErrors.length != 0){
            notification = 'error'
        } else if(message.length != 0){
            notification = 'message'
        };

        try {
            const products = await Product.findAll({
                include: ["shops", "categories", "types"],
                where: { status: "active" },
                order: [["id", "ASC"]],
                offset: 40,
                limit: 40,
            });
            const types = await typeService.findAll();
            for (const type of types) {
                type.count = type.products.length;
            }
            res.render('index', { 
                notification,
                message: message,
                errors: validateErrors,
                products: products, 
                types: types 
            });
        } catch (error) {
            res.status(400).send(error.message);
        }
        
    },

    // GET story
    story: function(req, res) {
        
        // Notifications
        const validateErrors = req.flash('validateErrors')
        const message = req.flash('message');
        let notification = null;
        if(validateErrors.length != 0){
            notification = 'error'
        } else if(message.length != 0){
            notification = 'message'
        };

        res.render('story', { 
            notification,
            message: message,
            errors: validateErrors, 
        });
    },

    // GET contact
    contact: function(req, res) {
        
        // Notifications
        const validateErrors = req.flash('validateErrors')
        const message = req.flash('message');
        let notification = null;
        if(validateErrors.length != 0){
            notification = 'error'
        } else if(message.length != 0){
            notification = 'message'
        };

        res.render('contact', { 
            notification,
            message: message,
            errors: validateErrors, 
        });
    }
}

module.exports = indexController;