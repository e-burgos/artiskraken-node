// require
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");

// Services
const userService = require("../services/userService");


// Controller
const usersController = {

    // GET Login
    getLogin: function (req, res, next) {        
        
        // Notifications
        const validateErrors = req.flash('validateErrors')
        const message = req.flash('message');
        let notification = null;
        if(validateErrors.length != 0){
            notification = 'error'
        } else if(message.length != 0){
            notification = 'message'
        };

        res.render("users/login",{
            notification: notification,
            message: message,
            errors: validateErrors,
        });
    },

    // POST Login
    postLogin: async (req, res) => {
        try {
            let errors = validationResult(req);
            let loggedUser;
    
            if (errors.isEmpty()) {
                let users = await userService.findAll();

                for (let i = 0; i < users.length; i++) {
                    const user = users[i];
                    if (user.email == req.body.email) {
                        if (bcrypt.compareSync(req.body.password, user.password)) {
                            loggedUser = user;
                            break;
                        };
                    };
                };

                if (!loggedUser) {
                    req.flash('validateErrors', [{msg: 'Email o contraseña incorrectos'}]);
                    return res.redirect("/users/login");
                };

                req.session.loggedUserId = loggedUser.id;

                if (req.body.remember) {
                    res.cookie("remember", loggedUser.id, {
                        maxAge: 60000,
                    });
                };
                req.flash('message', `Hola ${loggedUser.name}, bienvenido nuevamente!`);
                if(loggedUser.admin){
                    res.redirect("/admin");
                } else {
                    res.redirect("/");
                };
            } else {
                req.flash('validateErrors', errors.errors);
                return res.redirect("/users/login");
            }
        } catch (error) {
            res.status(400).send(error.message);
        };
    },

    // GET Register
    getRegister: function (req, res, next) {
        // Notifications
        const validateErrors = req.flash('validateErrors')
        const message = req.flash('message');
        let notification = null;
        if(validateErrors.length != 0){
            notification = 'error'
        } else if(message.length != 0){
            notification = 'message'
        };

        res.render("users/register",{
            notification: notification,
            message: message,
            errors: validateErrors,
        });
    },

    // POST Register
    postRegister: async (req, res, next) => {
        let errors = validationResult(req);
        try {
            if (errors.isEmpty()) {
                const avatar = req.file ? req.file.filename : "default-avatar.png";
            
                await userService.create({
                    name: req.body.name,
                    userName: req.body.userName,
                    phone: req.body.selectNumber + req.body.phoneNumber,
                    email: req.body.email,
                    dni: null,
                    password: bcrypt.hashSync(req.body.password, 10),
                    avatar: avatar,
                    admin: false,
                    status: "active",
                    role:"buyer",
                    bio: "",
                    facebook: "",
                    instagram: "",
                    twitter: "",
                    shopId: null,
                    addressId: null
                });
                req.flash('message', 'Tu cuenta fue creada correctamente, por favor logeate para verfificarla.');
                return res.redirect("/users/login");
            } else {
                req.flash('validateErrors', errors.errors);
                return res.redirect("/users/register");
            }
        } catch (error) {
            res.status(400).send(error.message);
        };
    },

    // DELETE session logout
    destroySession: function (req, res, next) {
        cookie = req.cookies;
        for (var prop in cookie) {
            if (!cookie.hasOwnProperty(prop)) {
                continue;
            }
            res.cookie(prop, "", { expires: new Date(0) });
        }
        req.session.destroy((err) => {
            res.redirect("/users/login");
        });
    },

    /************************ USER PROFILE **************************/

    // GET user profile
    getProfile: async (req, res, next) => {
        
        // Notifications
        const validateErrors = req.flash('validateErrors')
        const message = req.flash('message');
        let notification = null;
        if(validateErrors.length != 0){
            notification = 'error'
        } else if(message.length != 0){
            notification = 'message'
        };

        try {
            let user = await userService.findOne(req.params.id);
            let userData = await userService.getUserData(user);
            
            res.render("users/profile", {
                notification: notification,
                message: message,
                errors: validateErrors,
                comments: userData.comments,
                orders: userData.orders,
                addresses: user.addresses,
                user: user,
            });
        } catch (error) {
            res.status(400).send(error.message);
        }
    },

    // PUT user profile data form
    putUserData: async (req, res, next) => {
        let errors = validationResult(req);
        try {
            let user = await userService.findOne(req.params.id);
            
            if (errors.isEmpty()) {

                // Chequear mail en uso
                if(user.email != req.body.email){
                    let checkEmail = await userService.checkUserEmail(req.body.email);
                    if(checkEmail == 'used'){
                        req.flash('validateErrors', [{msg: 'El email ingresado ya se encuentra en uso.'}]);
                        return res.redirect(`/users/${req.params.id}/profile#tab-data`);
                    }
                };

                // Chequear username en uso
                if(user.userName != req.body.userName){
                    let checkUserName = await userService.checkUserName(req.body.userName);
                    if(checkUserName == 'used'){
                        req.flash('validateErrors', [{msg: 'El nombre de usuario ingresado ya se encuentra en uso.'}]);
                        return res.redirect(`/users/${req.params.id}/profile#tab-data`);
                    }
                };

                let filename = req.file
                    ? req.file.filename
                    : user.avatar;
                
                await userService.update(req.params.id,{
                    name: req.body.name,
                    userName: req.body.userName,
                    phone: req.body.phone,
                    email: req.body.email,
                    avatar: filename,
                    bio: req.body.bio,
                    facebook: req.body.facebook,
                    instagram: req.body.instagram,
                    twitter: req.body.twitter
                });

                req.flash('message', 'Tus datos fueron actualizados correctamente.');
                return res.redirect(`/users/${req.params.id}/profile#tab-info`);
            } else {
                req.flash('validateErrors', errors.errors);
                return res.redirect(`/users/${req.params.id}/profile#tab-data`);
            }
        } catch (error) {
            res.status(400).send(error.message);
        }
    },

    // PUT user profile password form
    putUserPassword: async (req, res, next) => {
        let errors = validationResult(req);
        try {
            let user = await userService.findOne(req.params.id);
            let change_password = "";
            
            if (errors.isEmpty()) {
                
                if (!bcrypt.compareSync(req.body.password, user.password)) {
                    req.flash('validateErrors', [{msg: 'La contraseña actual ingresada es incorrecta'}]);
                    return res.redirect(`/users/${req.params.id}/profile#tab-pass`);
                }

                if (req.body.confirmation == req.body.new_password) {
                    change_password = bcrypt.hashSync(req.body.new_password,10);
                } else {
                    change_password = user.password;
                }

                await userService.update(req.params.id, {
                    password: change_password,   
                });

            req.flash('message', 'Tu contraseña fue actualizada correctamente.');
                return res.redirect(`/users/${req.params.id}/profile#tab-info`);
            } else {
                req.flash('validateErrors', errors.errors);
                return res.redirect(`/users/${req.params.id}/profile#tab-pass`);
            }
        } catch (error) {
            res.status(400).send(error.message);
        }
    },

    // GET user confirmation
    getConfirmation: function (req, res, next) {
        res.render("users/confirmation");
    },
};

module.exports = usersController;