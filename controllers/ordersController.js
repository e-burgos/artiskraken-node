//Require
const { validationResult } = require("express-validator");

// Services
const orderService = require("../services/orderService");
const userService = require("../services/userService");

const ordersController = {
    getOrderDetails: async function (req, res) {
        let loggedUserId = req.session.loggedUserId;
        let currentUser;

        // Notifications
        const validateErrors = req.flash("validateErrors");
        const message = req.flash("message");
        let notification = null;

        if (validateErrors.length != 0) {
            notification = "error";
        } else if (message.length != 0) {
            notification = "message";
        }

        try {
            if (loggedUserId == undefined) {
                currentUser = null;
            } else {
                currentUser = await userService.findOne(loggedUserId);
            }
            let order = await orderService.findOne(req.params.id);
            res.render("orders/orderDetails", {
                notification: notification,
                message: message,
                errors: validateErrors,
                order,
                currentUser,
            });
        } catch (error) {
            res.status(404).send(error.message);
        }
    },

    getOrderSuccess: async function (req, res) {
        let loggedUserId = req.session.loggedUserId;
        let currentUser;

        // Notifications
        const validateErrors = req.flash("validateErrors");
        const message = req.flash("message");
        let notification = null;

        if (validateErrors.length != 0) {
            notification = "error";
        } else if (message.length != 0) {
            notification = "message";
        }

        try {
            if (loggedUserId == undefined) {
                currentUser = null;
            } else {
                currentUser = await userService.findOne(loggedUserId);
            }
            let order = await orderService.findOne(req.params.id);
            res.render("orders/orderSuccess", {
                notification: notification,
                message: message,
                errors: validateErrors,
                order,
                currentUser,
            });
        } catch (error) {
            res.status(404).send(error.message);
        }
    },
    getOrderPending: async function (req, res) {
        let loggedUserId = req.session.loggedUserId;
        let currentUser;

        // Notifications
        const validateErrors = req.flash("validateErrors");
        const message = req.flash("message");
        let notification = null;

        if (validateErrors.length != 0) {
            notification = "error";
        } else if (message.length != 0) {
            notification = "message";
        }

        try {
            if (loggedUserId == undefined) {
                currentUser = null;
            } else {
                currentUser = await userService.findOne(loggedUserId);
            }
            let order = await orderService.findOne(req.params.id);
            await userService.destroy(order.userId);
            await orderService.destroy(order.id);
            res.render("orders/orderPending", {
                notification: notification,
                message: message,
                errors: validateErrors,
                order,
                currentUser,
            });
        } catch (error) {
            res.status(404).send(error.message);
        }
    },

    getOrderFailure: async function (req, res) {
        let loggedUserId = req.session.loggedUserId;
        let currentUser;

        // Notifications
        const validateErrors = req.flash("validateErrors");
        const message = req.flash("message");
        let notification = null;

        if (validateErrors.length != 0) {
            notification = "error";
        } else if (message.length != 0) {
            notification = "message";
        }

        try {
            if (loggedUserId == undefined) {
                currentUser = null;
            } else {
                currentUser = await userService.findOne(loggedUserId);
            }
            let order = await orderService.findOne(req.params.id);
            await userService.destroy(order.userId);
            await orderService.destroy(order.id);
            res.render("orders/orderFailure", {
                notification: notification,
                message: message,
                errors: validateErrors,
                order,
                currentUser,
            });
        } catch (error) {
            res.status(404).send(error.message);
        }
    },
};

module.exports = ordersController;