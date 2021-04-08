// Require
const { check, validationResult, body } = require("express-validator");

// Services
const couponService = require("../services/couponService");

// Controller
const couponsController = {

    //POST create coupon
    createCoupon: async (req, res, next) => {
        let errors = validationResult(req);
        try {
            if (errors.isEmpty()) {
                await couponService.create({
                    name: req.body.name,
                    description: req.body.description,
                    discount: req.body.discount,
                    couponCode: req.body.couponCode,
                    shopId: req.params.shop,
                    status: req.body.status
                });
                req.flash('message', 'El cupón fue creado correctamente.');
                res.redirect(`/shops/${req.params.shop}/profile#tab-coupons`);
            } else {
                req.flash('validateErrors', errors.errors);
                res.redirect(`/shops/${req.params.shop}/profile#tab-coupons`);
            }
        } catch (error) {
            res.status(400).send(error.message);
        }
    },

    //PUT edit coupon
    updateCoupon: async (req, res, next) => {
        let errors = validationResult(req);
        try { 
            if (errors.isEmpty()) {
                await couponService.update(req.params.id, {
                    name: req.body.name,
                    description: req.body.description,
                    discount: req.body.discount,
                    couponCode: req.body.couponCode,
                    shopId: req.params.shop,
                    status: req.body.status
                });
                req.flash('message', 'El cupón fue actualizado correctamente.');
                res.redirect(`/shops/${req.params.shop}/profile#tab-coupons`);
            } else {
                req.flash('validateErrors', errors.errors);
                res.redirect(`/shops/${req.params.shop}/profile#tab-coupons`);
            }
         } catch (error) {
            res.status(400).send(error.message);
        }
    },

    //POST coupon blocked
    blockedCoupon: async (req, res, next) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            try {
                await couponService.update(req.params.id,{
                    status: 'blocked'
                });
                req.flash('message', 'El cupón fue bloquedo temporalmente.');
                res.redirect(`/shops/${req.params.shop}/profile#tab-coupons`);
            } catch (error) {
                res.status(400).send(error.message);
            };
        } else {
            req.flash('validateErrors', errors.errors);
            res.redirect(`/shops/${req.params.shop}/profile#tab-coupons`);
        }
    },

    //POST coupon activate
    activateCoupon: async (req, res, next) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            try {
                await couponService.update(req.params.id,{
                    status: 'active'
                });
                req.flash('message', 'El cupón fue habilitado correctamente.');
                res.redirect(`/shops/${req.params.shop}/profile#tab-coupons`);
            } catch (error) {
                res.status(400).send(error.message);
            };
        } else {
            req.flash('validateErrors', errors.errors);
            res.redirect(`/shops/${req.params.shop}/profile#tab-coupons`);
        }
    },

    //DELETE coupon
    destroyCoupon: async (req, res, next) => {
        try {
            await couponService.destroy(req.params.id);
            req.flash('message', 'El cupón fue eliminado correctamente.');
            res.redirect(`/shops/${req.params.shop}/profile#tab-coupons`);
        } catch (error) {
            res.status(400).send(error.message);
        }
    },

}

module.exports = couponsController;