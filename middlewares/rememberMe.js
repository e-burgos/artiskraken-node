const userService = require("../services/userService");

const rememberMe = async (req,res,next) => {
    try {
        if(req.cookies.remember && !req.session.loggedUserId){
            let loggedUser = await userService.findOne(req.cookies.remember)
            req.session.loggedUserId = loggedUser.id;
        }
    next();
    } catch (error) {
        res.status(400).send(error.message);
    }
};

module.exports = rememberMe;