// Require
const fs = require('fs');
const { check, validationResult, body } = require("express-validator");

// Services
const productService = require("../services/productService");
const userService = require("../services/userService");
const commentService = require('../services/commentService');

// Controllers
const commentsController = require("./commentsController");
const categoryService = require('../services/categoryService');
const typeService = require('../services/typeService');

const productsController = {
    
    //GET Product Details
    getDetails: async (req, res, next) => {
        const loggedUserId = req.session.loggedUserId;

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
            const currentUser = await userService.findOne(loggedUserId);
            const product = await productService.findOne(req.params.id);
            const comments = await commentService.productComments(req.params.id);
            const gallery = [product.gallery01, product.gallery02, product.gallery03]

            res.render("products/productDetails", {
                currentUser: currentUser,
                notification: notification,
                message: message,
                errors: validateErrors,
                product: product,
                comments: comments,
                gallery: gallery,
            });
        } catch (error) {
            res.status(400).send(error.message);
        };
    },

    // GET Create Product Form
    getCreate: async (req, res, next) => {
        
        // Notifications
        const validateErrors = req.flash('validateErrors')
        const message = req.flash('message');
        let notification = null;
        if(validateErrors.length != 0){
            notification = 'error'
        } else if(message.length != 0){
            notification = 'message'
        };

        let shopId = req.params.shop;
        try {
            const categories = await categoryService.findAll();
            const types = await typeService.findAll();
            res.render("products/productCreateForm", {
                shopId: shopId,
                notification: notification,
                message: message,
                errors: validateErrors, 
                categories, 
                types 
            });
        } catch (error) {
            res.status(400).send(error.message);
        }
    },

    // POST Create Product Form
    postCreate: async (req, res, next) => {
        let errors = validationResult(req);
        try {           
            let avatar = req.files.avatar;
            if (req.files.avatar != null) {
                avatar = req.files.avatar[0].filename;
            } else {
                avatar = "without-image.png";
            }

            let gallery = [];
            if (req.files.gallery != null) {
                let array = req.files.gallery;
                for (let i = 0; i < array.length; i++) {
                    const image = array[i].filename;
                    gallery.push(image);
                }
            } else {
                gallery = [
                    "without-image.png",
                    "without-image.png",
                    "without-image.png",
                ];
            }

            if (errors.isEmpty()) {
                let newProduct = {
                    shopId: req.params.shop,
                    categoryId: req.body.categoryId,
                    typeId: req.body.typeId,
                    name: req.body.name,
                    description: req.body.description,
                    details: req.body.details,
                    brewery: req.body.brewery,
                    price: parseFloat(req.body.price),
                    discount: parseFloat(req.body.discount),
                    stock: req.body.stock || 0,
                    category: req.body.category,
                    type: req.body.type,
                    ibu: req.body.ibu,
                    abv: req.body.abv,
                    og: req.body.og,
                    avatar: avatar,
                    gallery01: gallery[0] ? gallery[0] : "without-image.png",
                    gallery02: gallery[1] ? gallery[1] : "without-image.png",
                    gallery03: gallery[2] ? gallery[2] : "without-image.png",
                    status: req.body.status
                };

                req.flash('message', 'El producto fue creado correctamente.');
                await productService.create(newProduct);
                return res.redirect(`/shops/${req.params.shop}/profile#tab-products`);
            } else {
                req.flash('validateErrors', errors.errors);
                return res.redirect(`/shops/${req.params.shop}/profile#tab-products`);
            }
        } catch (error) {
            res.status(400).send(error.message);    
        }
        
    },

    // Update - Form to edit
    getEdit: async (req, res, next) => {
        
        // Notifications
        const validateErrors = req.flash('validateErrors')
        const message = req.flash('message');
        let notification = null;
        if(validateErrors.length != 0){
            notification = 'error'
        } else if(message.length != 0){
            notification = 'message'
        };

        let shopId = req.params.shop;
        try {
            const product = await productService.findOne(req.params.id)
            const categories = await categoryService.findAll();
            const types = await typeService.findAll();
            const productGallery = [product.gallery01, product.gallery02, product.gallery03]
            
            res.render("products/productEditForm", {
                shopId: shopId,
                notification: notification,
                message: message,
                errors: validateErrors,
                product: product,
                gallery: productGallery,
                categories, 
                types 
            });
        } catch (error) {
            res.status(400).send(error.message);
        }
    },

    // PUT - Edit Product Form
    putEdit: async (req, res, next) => {
        let errors = validationResult(req);
        try {
            const product = await productService.findOne(req.params.id)
            const productGallery = [product.gallery01, product.gallery02, product.gallery03]

            if (errors.isEmpty()) {
                let avatar = req.files.avatar;
                if (req.files.avatar != null) {
                    // Delete old image
                    fs.unlinkSync(
                        __dirname +
                            "/../public/images/products/" +
                            product.avatar
                    );
                    // Replace old image
                    avatar = req.files.avatar[0].filename;
                } else {
                    avatar = product.avatar;
                }

                let gallery = [];
                if (req.files.gallery != null) {
                    // Delete old image
                    if(product.gallery01 != "without-image.png"){
                        req.files.gallery[0] != null ? fs.unlinkSync( __dirname + "/../public/images/products/" + product.gallery01) : null;
                    };
                    if(product.gallery02 != "without-image.png"){
                        req.files.gallery[1] != null ? fs.unlinkSync( __dirname + "/../public/images/products/" + product.gallery02) : null;
                    };
                    if(product.gallery03 != "without-image.png"){
                        req.files.gallery[2] != null ? fs.unlinkSync( __dirname + "/../public/images/products/" + product.gallery02) : null;
                    };
                    // Replace old image
                    let array = req.files.gallery;
                    for (let i = 0; i < array.length; i++) {
                        const image = array[i].filename;
                        gallery.push(image);
                    }
                } else {
                    gallery = productGallery;
                }

                let ibu = req.body.ibu == "0" ? product.ibu : req.body.ibu;
                let abv = req.body.abv == "0" ? product.abv : req.body.abv;
                let og = req.body.og == "1000" ? product.og : req.body.og;

                let productEdit = {
                    shopId: req.params.shop,
                    categoryId: req.body.categoryId,
                    typeId: req.body.typeId,
                    name: req.body.name,
                    description: req.body.description,
                    details: req.body.details,
                    brewery: req.body.brewery,
                    price: parseFloat(req.body.price),
                    discount: parseFloat(req.body.discount),
                    stock: req.body.stock || 0,
                    category: req.body.category,
                    type: req.body.type,
                    ibu: ibu,
                    abv: abv,
                    og: og,
                    avatar: avatar,
                    gallery01: gallery[0],
                    gallery02: gallery[1],
                    gallery03: gallery[2],
                    status: req.body.status
                };

                req.flash('message', 'El producto fue actualizado correctamente.');
                await productService.update(req.params.id, productEdit);
                return res.redirect(`/shops/${req.params.shop}/profile#tab-products`);
            } else {
                req.flash('validateErrors', errors.errors);
                return res.redirect(`/shops/${req.params.shop}/profile#tab-products`);
            }
        } catch (error) {
            res.status(400).send(error.message); 
        }
    },

    //POST blocked product
    postBlocked: async (req, res, next) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            try {
                await productService.update(req.params.id,{
                    status: 'blocked'
                });
                req.flash('message', 'El producto fue bloquedo temporalmente.');
                return res.redirect(`/shops/${req.params.shop}/profile#tab-products`);
            } catch (error) {
                res.status(400).send(error.message);
            };
        } else {
            req.flash('validateErrors', errors.errors);
            return res.redirect(`/shops/${req.params.shop}/profile#tab-products`);
        }
    },

    //POST activate product
    postActivate: async (req, res, next) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            try {
                await productService.update(req.params.id,{
                    status: 'active'
                });
                req.flash('message', 'El producto fue habilitado correctamente.');
                return res.redirect(`/shops/${req.params.shop}/profile#tab-products`);
            } catch (error) {
                res.status(400).send(error.message);
            };
        } else {
            req.flash('validateErrors', errors.errors);
            return res.redirect(`/shops/${req.params.shop}/profile#tab-products`);
        }
    },

    // DELETE - Delete one product from DB
    destroy: async (req, res) => {
        try {
            let product = await productService.findOne(req.params.id);

            // Eliminar imagenes
            if(product.avatar != "without-image.png"){
                fs.unlinkSync( __dirname + "/../public/images/products/" + product.avatar);
            }; 
            if(product.gallery01 != "without-image.png"){
                fs.unlinkSync( __dirname + "/../public/images/products/" + product.gallery01);
            };
            if(product.gallery02 != "without-image.png"){
                fs.unlinkSync( __dirname + "/../public/images/products/" + product.gallery02);
            };
            if(product.gallery03 != "without-image.png"){
                fs.unlinkSync( __dirname + "/../public/images/products/" + product.gallery03);
            };

            // Eliminar comentarios
            let allComments = await commentService.findAll();
            allComments.forEach( async comment => {
                if(comment.productId == req.params.id){
                    await commentService.destroy(Comment.id);
                }
            });            

            await productService.destroy(req.params.id);
            req.flash('message', 'El producto fue eliminado correctamente.');
            return res.redirect(`/shops/${req.params.shop}/profile#tab-products`);
        } catch (error) {
            res.status(400).send(error.message);
        }
        
    },

    // Create Comment Form
    postComment: commentsController.create,

    // Delete - Delete one comment
    destroyComment: commentsController.destroy,



};

module.exports = productsController;
