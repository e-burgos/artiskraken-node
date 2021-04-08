// Require
const { check, validationResult, body } = require("express-validator");

// Services
const shippingMethodService = require("../services/shippingMethodService");

// Controller
const shippingMethodsController = {

    //POST create Shipping Method
    create: async (req, res, next) => {
        let errors = validationResult(req);
        let shopId = req.params.shop;
        try { 
            if (errors.isEmpty()) {
                await shippingMethodService.create({
                    name: req.body.name,
                    amount: req.body.amount,
                    description: req.body.description,
                    location: req.body.location,
                    status: req.body.status,
                    shopId: shopId,
                });
                req.flash('message', 'El método de envío fue creado correctamente.');
                res.redirect(`/shops/${shopId}/profile#tab-shippingMethods`);
            } else {
                req.flash('validateErrors', errors.errors);
                res.redirect(`/shops/${shopId}/profile#tab-shippingMethods`);
            }
        } catch (error) {
            res.status(400).send(error.message);
        }
    },

    //PUT Edit Shipping Method
    update: async (req, res, next) => {
        let errors = validationResult(req);
        let shopId = req.params.shop;
        let shippingMethodId = req.params.id;
        try { 
            if (errors.isEmpty()) {
                await shippingMethodService.update(shippingMethodId, {
                    name: req.body.name,
                    amount: req.body.amount,
                    description: req.body.description,
                    location: req.body.location,
                    status: req.body.status,
                    shopId: shopId,
                });
                req.flash('message', 'El método de envío fue actualizado correctamente.');
                res.redirect(`/shops/${shopId}/profile#tab-shippingMethods`);
            } else {
                req.flash('validateErrors', errors.errors);
                res.redirect(`/shops/${shopId}/profile#tab-shippingMethods`);
            }
        } catch (error) {
            res.status(400).send(error.message);
        }
    },

    // DELETE ShippingMethod
    destroy: async (req, res, next) => {
        let shopId = req.params.shop;
        try {
            await shippingMethodService.destroy(req.params.id);
            req.flash('message', 'El método de envío fue eliminado correctamente.');
            res.redirect(`/shops/${shopId}/profile#tab-shippingMethods`);
        } catch (error) {
            res.status(400).send(error.message);
        }
    },
    
}

module.exports = shippingMethodsController;