// Require
const { check, validationResult, body } = require("express-validator");

// Services
const orderService = require("../../services/orderService");

// Controller
const ordersController = {

    //POST create order
    create: async (req, res, next) => {
        let errors = validationResult(req);
        try { 
            if (errors.isEmpty()) {
                await orderService.create({
                    email: req.body.email,
                    count:req.body.count,
                    totalShipping: req.body.totalShipping,
                    tax:req.body.tax,
                    total:req.body.total,
                    status:req.body.status,
                    userId:req.body.userId,
                    paymentId:req.body.paymentId,
                    shippingMethodId:req.body.shippingMethodId
                })
                req.flash('message', 'Un nuevo pedido fue creado manualmente.');
                res.redirect("/admin#tab-orders");
            } else {
                req.flash('validateErrors', errors.errors);
                res.redirect("/admin#tab-orders");
            }
        } catch (error) {
            res.status(400).send(error.message);
        }
    },

    //PUT Edit Order
    update: async (req, res, next) => {
        let errors = validationResult(req);
        try { 
            if (errors.isEmpty()) {
                await orderService.update(req.params.id, {
                    email: req.body.email,
                    count:req.body.count,
                    totalShipping: req.body.totalShipping,
                    tax:req.body.tax,
                    total:req.body.total,
                    status:req.body.status,
                    userId:req.body.userId,
                    paymentId:req.body.paymentId,
                    shippingMethodId:req.body.shippingMethodId
                })
                req.flash('message', 'Pedido actualizado fue creado correctamente.');
                res.redirect("/admin#tab-orders");
            } else {
                req.flash('validateErrors', errors.errors);
                res.redirect("/admin#tab-orders");
            }
        } catch (error) {
            res.status(400).send(error.message);
        }
    },

    // DELETE Order
    destroy: async (req, res, next) => {
        try {
            await orderService.destroy(req.params.id);
            req.flash('message', 'Pedido eliminado correctamente.');
            res.redirect("/admin#tab-orders");
        } catch (error) {
            res.status(400).send(error.message);
        }
    },
    
}

module.exports = ordersController;