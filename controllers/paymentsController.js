// Require
const { check, validationResult, body } = require("express-validator");

// Services
const paymentService = require("../services/paymentService");
const shopService = require("../services/shopService");

// Controller
const paymentsController = {
    //POST create payment
    create: async (req, res, next) => {
        let errors = validationResult(req);
        let shopId = req.params.shop;
        try {
            if (errors.isEmpty()) {
                await paymentService.create({
                    name: req.body.name,
                    description: req.body.description,
                    type: req.body.type,
                    status: req.body.status,
                    shopId: shopId,
                });
                req.flash(
                    "message",
                    "El método de pago fue creado correctamente."
                );
                res.redirect(`/shops/${shopId}/profile#tab-payments`);
            } else {
                req.flash("validateErrors", errors.errors);
                res.redirect(`/shops/${shopId}/profile#tab-payments`);
            }
        } catch (error) {
            res.status(400).send(error.message);
        }
    },

    // DELETE Payment
    destroy: async (req, res, next) => {
        let shopId = req.params.shop;
        try {
            await paymentService.destroy(req.params.id);
            req.flash(
                "message",
                "El método de pago fue eliminado correctamente."
            );
            res.redirect(`/shops/${shopId}/profile#tab-payments`);
        } catch (error) {
            res.status(400).send(error.message);
        }
    },

    //PUT update payment
    update: async (req, res, next) => {
        let errors = validationResult(req);
        let shopId = req.params.shop;
        let paymentId = req.params.id;
        try {
            if (errors.isEmpty()) {
                await paymentService.update(paymentId, {
                    name: req.body.name,
                    description: req.body.description,
                    type: req.body.type,
                    status: req.body.status,
                    shopId: shopId,
                });
                req.flash(
                    "message",
                    "El método de pago fue actualizado correctamente."
                );
                res.redirect(`/shops/${shopId}/profile#tab-payments`);
            } else {
                req.flash("validateErrors", errors.errors);
                res.redirect(`/shops/${shopId}/profile#tab-payments`);
            }
        } catch (error) {
            res.status(400).send(error.message);
        }
    },

    //PUT config MP payment
    updateMercadoPago: async (req, res, next) => {
        let errors = validationResult(req);
        let shopId = req.params.shop;
        let paymentId = req.params.id;

        if (req.body.tokenKey.trim() == "") {
            req.flash("validateErrors", [
                { msg: "El campo Access Token no puede estar vacío." },
            ]);
            res.redirect(`/shops/${shopId}/profile#tab-payments`);
        };

        if (req.body.publicKey.trim() == "") {
            req.flash("validateErrors", [
                { msg: "El campo Public Key no puede estar vacío." },
            ]);
            res.redirect(`/shops/${shopId}/profile#tab-payments`);
        };

        try {
            if (errors.isEmpty()) {
                await shopService.update(shopId, {
                    tokenKey: req.body.tokenKey,
                    publicKey: req.body.publicKey,
                });
                await paymentService.update(paymentId, {
                    status: 'active',
                });
                req.flash(
                    "message",
                    "El método de pago fue configurado correctamente."
                );
                res.redirect(`/shops/${shopId}/profile#tab-payments`);
            } else {
                req.flash("validateErrors", errors.errors);
                res.redirect(`/shops/${shopId}/profile#tab-payments`);
            }
        } catch (error) {
            res.status(400).send(error.message);
        }
    },
};

module.exports = paymentsController;