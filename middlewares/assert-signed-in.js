function assertSignedIn (req, res, next) {
    if (!res.locals.currentUser) {
        res.redirect("/users/login");
    } else {
        next();
    }
}

module.exports = assertSignedIn;