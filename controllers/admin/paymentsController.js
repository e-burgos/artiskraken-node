// Require
const { check, validationResult, body } = require("express-validator");

// Services
const paymentService = require("../../services/paymentService");

// Controller
const paymentsController = {

    //POST create payment
    create: async (req, res, next) => {
        let errors = validationResult(req);
        try { 
            if (errors.isEmpty()) {
                await paymentService.create({
                    name: req.body.name,
                    description: req.body.description,
                    type: req.body.type,
                    status: req.body.status,
                    shopId: req.body.shopId,
                });
                req.flash('message', 'El método de pago fue creado correctamente.');
                res.redirect("/admin#tab-payments");
            } else {
                req.flash('validateErrors', errors.errors);
                res.redirect("/admin#tab-payments");
            }
        } catch (error) {
            res.status(400).send(error.message);
        }
    },

    //PUT edit payment
    update: async (req, res, next) => {
        let errors = validationResult(req);
        try {
            if (errors.isEmpty()) {
                await paymentService.update(req.params.id, {
                    name: req.body.name,
                    description: req.body.description,
                    type: req.body.type,
                    status: req.body.status,
                    shopId: req.body.shopId,
                });
                req.flash('message', 'El método de pago fue actualizado correctamente.');
                res.redirect("/admin#tab-payments");
            } else {
                req.flash('validateErrors', errors.errors);
                res.redirect("/admin#tab-payments");
            }
        } catch (error) {
            res.status(400).send(error.message);
        }
    },

    // DELETE Payment
    destroy: async (req, res, next) => {
        try {
            await paymentService.destroy(req.params.id);
            req.flash('message', 'El método de pago fue eliminado correctamente.');
            res.redirect("/admin#tab-payments");
        } catch (error) {
            res.status(400).send(error.message);
        }
    },
    
}

module.exports = paymentsController;