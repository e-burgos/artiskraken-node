// Require
const { check, validationResult, body } = require("express-validator");

// Services
const shippingMethodService = require("../../services/shippingMethodService");

// Controller
const shippingMethodsController = {

    //POST create Shipping Method
    create: async (req, res, next) => {
        let errors = validationResult(req);
        try { 
            if (errors.isEmpty()) {
                await shippingMethodService.create({
                    name: req.body.name,
                    amount: req.body.amount,
                    description: req.body.description,
                    location: req.body.location,
                    status: req.body.status,
                    shopId: req.body.shopId,
                });
                req.flash('message', 'El método de envío fue creado correctamente.');
                res.redirect("/admin#tab-shippingMethods");
            } else {
                req.flash('validateErrors', errors.errors);
                res.redirect("/admin#tab-shippingMethods");
            }
        } catch (error) {
            res.status(400).send(error.message);
        }
    },

    //PUT Edit Shipping Method
    update: async (req, res, next) => {
        let errors = validationResult(req);
        try { 
            if (errors.isEmpty()) {
                await shippingMethodService.update(req.params.id, {
                    name: req.body.name,
                    amount: req.body.amount,
                    description: req.body.description,
                    location: req.body.location,
                    status: req.body.status,
                    shopId: req.body.shopId,
                });
                req.flash('message', 'El método de envío fue actualizado correctamente.');
                res.redirect("/admin#tab-shippingMethods");
            } else {
                req.flash('validateErrors', errors.errors);
                res.redirect("/admin#tab-shippingMethods");
            }
        } catch (error) {
            res.status(400).send(error.message);
        }
    },

    // DELETE ShippingMethod
    destroy: async (req, res, next) => {
        try {
            await shippingMethodService.destroy(req.params.id);
            req.flash('message', 'El método de envío fue eliminado correctamente.');
            res.redirect("/admin#tab-shippingMethods");
        } catch (error) {
            res.status(400).send(error.message);
        }
    },
    
}

module.exports = shippingMethodsController;