const userService = require("../services/userService");

const assertIsSeller = async (req, res, next) => {
    try {
        const id = req.session.loggedUserId;
        let currentUser = await userService.findOne(id);
        
        if (currentUser.role == "seller") {
            next();
        } else {
            res.redirect("/");
        };
    } catch (error) {
        res.status(400).send(error.message);
    };
}

module.exports = assertIsSeller;