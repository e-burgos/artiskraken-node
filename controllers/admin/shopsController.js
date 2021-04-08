// Require
const { check, validationResult, body } = require("express-validator");

// Services
const shopService = require("../../services/shopService");
const userService = require("../../services/userService");
const commentService = require("../../services/commentService");
const productService = require("../../services/productService");
const couponService = require("../../services/couponService");

// Controller
const shopsController = {

    //POST create shop
    create: async (req, res, next) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            try {
                let avatar = req.file ? req.file.filename : "default.jpg";

                // Crear tienda
                let shop = await shopService.create({
                    name: req.body.name,
                    phone: req.body.phone,
                    email: req.body.email,
                    avatar: avatar,
                    ranking: 0,
                    status: req.body.status,
                    sales: 0,
                    bio: req.body.bio,
                    facebook: req.body.facebook,
                    instagram: req.body.instagram,
                    twitter: req.body.twitter,
                    tokenKey: null,
                    publicKey: null,
                    marketplaceLink: null,
                    marketplaceApp: null,
                });

                // Actualizar propietario
                await userService.update(req.body.userId, { 
                    shopId: shop.id,
                    role: 'seller'
                });

                req.flash('message', 'La tienda fue creada correctamente.');
                res.redirect("/admin#tab-shops");
            } catch (error) {
                res.status(400).send(error.message);
            }
        } else {
            req.flash('validateErrors', errors.errors);
            res.redirect("/admin#tab-shops");
        }
    },

    //POST shop blocked
    blocked: async (req, res, next) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            try {
                let shop = await shopService.findOne(req.params.id);
                let shopData = await shopService.getShopData(shop);

                // Bloquear productos relacionados
                shopData.products.forEach( async product => {
                    await productService.update(product.id,{
                        status: 'blocked'
                    });
                });

                // Bloquear cupones emitidos
                shopData.coupons.forEach( async coupon => {
                    await couponService.update(coupon.id,{
                        status: 'blocked'
                    });
                });

                // Bloquear tienda
                await shopService.update(req.params.id,{
                        status: 'blocked'
                });

                req.flash('message', 'La tienda fue bloqueda temporalmente.');
                res.redirect("/admin#tab-shops");
            } catch (error) {
                res.status(400).send(error.message);
            };
        } else {
            req.flash('validateErrors', errors.errors);
            res.redirect("/admin#tab-shops");
        }
    },

    //POST shop activate
    activate: async (req, res, next) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            try {
                let shop = await shopService.findOne(req.params.id);
                let shopData = await shopService.getShopData(shop);

                // Activar productos relacionados
                shopData.products.forEach( async product => {
                    await productService.update(product.id,{
                        status: 'active'
                    });
                });

                // Activar cupones emitidos
                shopData.coupons.forEach( async coupon => {
                    await couponService.update(coupon.id,{
                        status: 'active'
                    });
                });

                // Activar tienda
                await shopService.update(req.params.id,{
                        status: 'active'
                });

                req.flash('message', 'La tienda fue habilitada correctamente.');
                res.redirect("/admin#tab-shops");
            } catch (error) {
                res.status(400).send(error.message);
            };
        } else {
            req.flash('validateErrors', errors.errors);
            res.redirect("/admin#tab-shops");
        }
    },

    //DELETE shop
    destroy: async (req, res, next) => {
        try {
            let shop = await shopService.findOne(req.params.id);
            let shopData = await shopService.getShopData(shop);

            // Eliminar comentarios de productos relacionados
            shopData.comments.forEach( async comment => {
                await commentService.destroy(Comment.id);
            });

            // Eliminar comentarios de productos relacionados
            shopData.products.forEach( async product => {
                
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
                // Elimnar producto
                await productService.destroy(product.id);
            });

            // Eliminar cupones emitidos
            shopData.coupons.forEach( async coupon => {
                await couponService.destroy(coupon.id);
            });

            await shopService.destroy(req.params.id);
            req.flash('message', 'La tienda fue eliminada correctamente.');
            res.redirect("/admin#tab-shops");
        } catch (error) {
            res.status(400).send(error.message);
        }
    },
    
}

module.exports = shopsController;