// Require
const { check, validationResult, body } = require("express-validator");
const bcrypt = require("bcrypt");

// Services
const userService = require("../../services/userService");
const shopService = require("../../services/shopService");
const productService = require("../../services/productService");
const couponService = require("../../services/couponService");

// Controller
const usersController = {

    //POST create user form
    create: async (req, res, next) => {
        let errors = validationResult(req);
        try {  
            if (errors.isEmpty()) {

                // Chequear mail en uso
                let checkEmail = await userService.checkUserEmail(req.body.email);
                                console.log(checkEmail);
                if(checkEmail == 'used'){
                    req.flash('validateErrors', [{msg: 'El email ingresado ya se encuentra en uso.'}]);
                    return res.redirect(`/admin#tab-users`);
                };
                
                // Chequear username en uso
                let checkUserName = await userService.checkUserName(req.body.userName);
                if(checkUserName == 'used'){
                    req.flash('validateErrors', [{msg: 'El nombre de usuario ingresado ya se encuentra en uso.'}]);
                    return res.redirect(`/admin#tab-users`);
                }

                let avatar = req.file ? req.file.filename : "default-avatar.png";

                let user = await userService.create({
                    name: req.body.name,
                    userName: req.body.userName,
                    phone: req.body.phone,
                    email: req.body.email,
                    password: bcrypt.hashSync(req.body.password, 10),
                    avatar: avatar,
                    admin: req.body.admin,
                    status: req.body.status,
                    dni: null,
                    shopId: null,
                    role:"buyer",
                    bio: req.body.bio || "Escribe algo sobre tí",
                    facebook: req.body.facebook,
                    instagram: req.body.instagram,
                    twitter: req.body.twitter
                });

                req.flash('message', 'El usuario fue creado correctamente correctamente.');
                return res.redirect(`/users/${user.id}/profile#tab-info`);
            } else {
                req.flash('validateErrors', errors.errors);
                return res.redirect(`/admin#tab-users`);
            }
        } catch (error) {
            res.status(400).send(error.message);
        }
    },

    //POST user blocked
    blocked: async (req, res, next) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            try {
                let user = await userService.findOne(req.params.id);

                console.log(user);

                // Bloquear tienda en caso de ser propietario
                if(user.shopId != null){
                    let shop = await shopService.findOne(user.shopId);
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
                    await shopService.update(user.shopId,{
                            status: 'blocked'
                    });
                };

                // Bloquear usuario
                await userService.update(user.id,{
                        status: 'blocked'
                });

                req.flash('message', 'El usario fue bloquedo temporalmente.');
                res.redirect("/admin#tab-users");
            } catch (error) {
                res.status(400).send(error.message);
            };
        } else {
            req.flash('validateErrors', errors.errors);
            res.redirect("/admin#tab-users");
        }
    },

    //POST user activate
    activate: async (req, res, next) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            try {

                // Habilitar usuario
                let user = await userService.findOne(req.params.id);
                await userService.update(user.id,{
                        status: 'active'
                });

                // Habilitar tienda en caso de ser propietario
                if(user.shopId != null){
                    let shop = await shopService.findOne(user.shopId);
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
                    await shopService.update(user.shopId,{
                            status: 'active'
                    });
                };

                req.flash('message', 'El usuario fue habilitado correctamente.');
                res.redirect("/admin#tab-users");
            } catch (error) {
                res.status(400).send(error.message);
            };
        } else {
            req.flash('validateErrors', errors.errors);
            res.redirect("/admin#tab-users");
        }
    },

    //DELETE user
    destroy: async (req, res, next) => {
        try {
            await userService.destroy(req.params.id);
            res.redirect(`/admin`);
        } catch (error) {
            res.status(400).send(error.message);
        }
    },
    
}

module.exports = usersController;