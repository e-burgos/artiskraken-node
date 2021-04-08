// Require
const { check, validationResult, body } = require("express-validator");

// Services
const commentService = require("../../services/commentService");

// Controller
const commentsController = {

    //DELETE comment
    destroy: async (req, res, next) => {
        try {
            await commentService.destroy(req.params.id);
            req.flash('message', 'El comentario fue eliminado correctamente.');
            res.redirect("/admin#tab-comments");
        } catch (error) {
            res.status(400).send(error.message);
        }
    },
    
}

module.exports = commentsController;