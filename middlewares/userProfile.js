const userService = require("../services/userService");

const userProfile = async (req, res, next) => {
    let loggedUserId = req.session.loggedUserId;   
    let user = await userService.findOne(loggedUserId);    
    if(req.url != `/${loggedUserId}/profile` && !user.admin){
        return res.redirect(`/users/${loggedUserId}/profile`);
    } else {
        next();
    }
}

module.exports = userProfile;