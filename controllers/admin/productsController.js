// Require
const { check, validationResult, body } = require("express-validator");

// Services
const productService = require("../../services/productService");

// Controller
const productsController = {

    //POST create product
    create: async (req, res, next) => {
        let errors = validationResult(req);
        try {
            if (errors.isEmpty()) {

                let avatar = req.files.avatar;
                if (req.files.avatar != null) {
                    avatar = req.files.avatar[0].filename;
                } else {
                    avatar = "without-image.png";
                };

                let gallery = [];
                if (req.files.gallery != null) {
                    let array = req.files.gallery;
                    for (let i = 0; i < array.length; i++) {
                        const image = array[i].filename;
                        gallery.push(image);  
                    }
                } else {
                    gallery = ["without-image.png","without-image.png","without-image.png"];
                };
        
                await productService.create({ 
                    shopId: req.body.shopId,
                    name: req.body.name,
                    description: req.body.description,
                    details: req.body.details,
                    brewery: req.body.brewery,
                    price: parseFloat(req.body.price),
                    discount: parseFloat(req.body.discount),
                    stock: req.body.stock || 0,
                    categoryId: req.body.categoryId,
                    typeId: req.body.typeId,
                    ibu: req.body.ibu,
                    abv: req.body.abv,
                    og: req.body.og,
                    avatar: avatar,
                    gallery01: gallery[0] ? gallery[0] : "without-image.png",
                    gallery02: gallery[1] ? gallery[1] : "without-image.png",
                    gallery03: gallery[2] ? gallery[2] : "without-image.png",
                    status: req.body.status
                });

                req.flash('message', 'El producto fue creado correctamente.');
                if(req.url == `/${req.body.shopId}/shop-profile`){
                    return res.redirect(`/admin/${req.body.shopId}/shop-profile`);
                }else {
                    return res.redirect("/admin#tab-products");
                }
            } else {
                req.flash('validateErrors', errors.errors);
                if(req.url == `/${req.body.shopId}/shop-profile`){
                    return res.redirect(`/admin/${req.body.shopId}/shop-profile`);
                }else {
                    return res.redirect("/admin#tab-products");
                }
            }
        } catch (error) {
            res.status(400).send(error.message);
        }
    },

    //POST blocked product
    blocked: async (req, res, next) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            try {
                await productService.update(req.params.id,{
                    status: 'blocked'
                });
                req.flash('message', 'El producto fue bloquedo temporalmente.');
                res.redirect("/admin#tab-products");
            } catch (error) {
                res.status(400).send(error.message);
            };
        } else {
            req.flash('validateErrors', errors.errors);
            res.redirect("/admin#tab-products");
        }
    },

    //POST activate product
    activate: async (req, res, next) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            try {
                await productService.update(req.params.id,{
                    status: 'active'
                });
                req.flash('message', 'El producto fue habilitado correctamente.');
                res.redirect("/admin#tab-products");
            } catch (error) {
                res.status(400).send(error.message);
            };
        } else {
            req.flash('validateErrors', errors.errors);
            res.redirect("/admin#tab-products");
        }
    },
    
}

module.exports = productsController;