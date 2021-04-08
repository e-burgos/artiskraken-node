const userService = require("../services/userService");

const authenticate = async (req, res, next) => {
    const id = req.session.loggedUserId;

    if (!id) return next();

    let loggedUser = await userService.findOne(id);

    if (!loggedUser) {
        delete req.session.loggedUserId;
        return next();
    };

    res.locals.currentUser = loggedUser;

    next();
}

module.exports = authenticate;