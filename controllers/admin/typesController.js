// Require
const { check, validationResult, body } = require("express-validator");

// Services
const typeService = require("../../services/typeService");

// Controller
const typeController = {

    //POST create type
    create: async (req, res, next) => {
        let errors = validationResult(req);
        try {
            if (errors.isEmpty()) {
                await typeService.create({
                    name: req.body.name,
                    description: req.body.description,
                });
                req.flash('message', 'El tipo de cerveza fue creado correctamente.');
                res.redirect("/admin#tab-types");
            } else {
                req.flash('validateErrors', errors.errors);
                res.redirect("/admin#tab-types");
            }
        } catch (error) {
            res.status(400).send(error.message);
        }
    },

    //PUT edit type
    update: async (req, res, next) => {
        let errors = validationResult(req);
        try {
            if (errors.isEmpty()) {
                await typeService.update(req.params.id, {
                    name: req.body.name,
                    description: req.body.description
                });
                req.flash('message', 'El tipo de cerveza fue actualizado correctamente.');
                res.redirect("/admin#tab-types");
            } else {
                req.flash('validateErrors', errors.errors);
                res.redirect("/admin#tab-types");
            }
        } catch (error) {
            res.status(400).send(error.message);
        }
    },

    //DELETE type
    destroy: async (req, res, next) => {
        try {
            await typeService.destroy(req.params.id);
            req.flash('message', 'El tipo de cerveza fue eliminado correctamente.');
            res.redirect("/admin#tab-types");
        } catch (error) {
            res.status(400).send(error.message);
        }
    },
    
}

module.exports = typeController;