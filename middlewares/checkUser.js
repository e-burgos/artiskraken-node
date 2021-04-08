const userService = require("../services/userService");

const checkUser = async (req,res,next) => {
    try {
        // Comprobar si existen usuarios
        let users = await userService.findAll();
        if(users.length == 0){
            next();
        };

        // Chequear mail en uso
        let checkEmail = await userService.checkUserEmail(req.body.email);
        if(checkEmail == 'used'){
            req.flash('validateErrors', [{msg: 'El email ingresado ya se encuentra en uso.'}]);
            return res.redirect("/users/register");
        };
        
        // Chequear username en uso
        let checkUserName = await userService.checkUserName(req.body.userName);
        if(checkUserName == 'used'){
            req.flash('validateErrors', [{msg: 'El nombre de usuario ingresado ya se encuentra en uso.'}]);
            return res.redirect("/users/register");
        }
        
        next();

    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = checkUser;