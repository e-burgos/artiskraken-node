// Require
const fs = require('fs');
const { check, validationResult, body } = require("express-validator");

// Services
const commentService = require("../services/commentService");
const userService = require("../services/userService");

// Controller
const commentsController = {

    // Create Comment Form
    create: async (req, res, next) => {
        let f = new Date();
        let date = f.getFullYear() + "-" + (f.getMonth() + 1) + "-" + f.getDate(); 
        let errors = validationResult(req);
        const loggedUserId = req.session.loggedUserId;
        try {
            let currentUser = await userService.findOne(loggedUserId);
            if (errors.isEmpty()) {
                await commentService.create({
                    comment: req.body.comment,
                    date: date.toString(),
                    userId: currentUser.id,
                    productId: parseInt(req.params.id)
                });

                req.flash('message', 'Gracias por tu comentario, te responderemos a la brevedad.');
                res.redirect(
                    `/products/${req.params.id}/productDetails#product-comments`
                );
            } else {
                req.flash('validateErrors', errors.errors);
                res.redirect(
                    `/products/${req.params.id}/productDetails#product-comments`
                );
            }
        } catch (error) {
            res.status(400).send(error.message);
        }
    },

    // Delete - Delete one comment
    destroy: async (req, res) => {
        try {
            let comment = await commentService.findOne(req.params.id);
            let productID = comment.productId;
            await commentService.destroy(req.params.id);
            req.flash('message', 'El comentario fue eliminado correctamente.');
            res.redirect(`/products/${productID}/productDetails`);
        } catch (error) {
            res.status(400).send(error.message);
        }
    },
};

module.exports = commentsController;
