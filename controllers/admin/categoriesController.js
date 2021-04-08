// Require
const { check, validationResult, body } = require("express-validator");

// Services
const categoryService = require("../../services/categoryService");

// Controller
const categoriesController = {

    //POST create category
    create: async (req, res, next) => {
        let errors = validationResult(req);
        try {
            if (errors.isEmpty()) {
                await categoryService.create({
                    name: req.body.name,
                    description: req.body.description,
                    typeId: req.body.typeId
                });
                req.flash('message', 'La categoría fue creada correctamente.');
                res.redirect("/admin#tab-categories");
            } else {
                req.flash('validateErrors', errors.errors);
                res.redirect("/admin#tab-categories");
            }
        } catch (error) {
            res.status(400).send(error.message);
        }
    },

    //PUT edit category
    update: async (req, res, next) => {
        let errors = validationResult(req);
        try {
            if (errors.isEmpty()) {
                await categoryService.update(req.params.id, {
                    name: req.body.name,
                    description: req.body.description,
                    typeId: req.body.typeId
                });
                req.flash('message', 'La categoria fue actualizada correctamente.');
                res.redirect("/admin#tab-categories");
            } else {
                req.flash('validateErrors', errors.errors);
                res.redirect("/admin#tab-categories");
            }
        } catch (error) {
            res.status(400).send(error.message);
        }
    },

    //DELETE category
    destroy: async (req, res, next) => {
        try {
            await categoryService.destroy(req.params.id);
            req.flash('message', 'La categoría fue eliminada correctamente.');
            res.redirect("/admin#tab-categories");
        } catch (error) {
            res.status(400).send(error.message);
        }
    },
    
}

module.exports = categoriesController;