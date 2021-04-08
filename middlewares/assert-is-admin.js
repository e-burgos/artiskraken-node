const userService = require("../services/userService");

const assertIsAdmin = async (req, res, next) => {
    try {
        const id = req.session.loggedUserId;
        let currentUser = await userService.findOne(id);
        
        if (currentUser.admin) {
            next();
        } else {
            res.redirect("/users/login");
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = assertIsAdmin;