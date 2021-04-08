const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const {check,validationResult, body}= require("express-validator");

// Utils
const multerOneImage = require("../utils/multer/multerOneImage");
const uploadUser = multerOneImage('users');

// Middlewares
const assertSignedIn = require('../middlewares/assert-signed-in');
const checkUser = require('../middlewares/checkUser');
const userProfile = require('../middlewares/userProfile');


// GET Login page
router.get('/login',usersController.getLogin);

// POST Login page
router.post(
  '/login',
  [
    check("email").isEmail().withMessage("Email inválido"),
    check("password").isLength({min:8,max:undefined}).withMessage("Contraseña inválida: minimo 8 caracteres"),
  ],
  usersController.postLogin)

// GET Register page
router.get('/register', usersController.getRegister);

// POST Register Page
router.post(
  '/register',
  uploadUser.single("avatar"),
  [
    check("name").isLength({min:2,max:35}).withMessage("El nombre debe tener entre 4 y 50 caracteres de largo"),
    check("userName").isLength({min:4,max:15}).withMessage("El nombre de usuario debe tener entre 4 y 15 caracteres de largo"),
    check("email").isEmail().withMessage("Email inválido"),
    check("phoneNumber").isMobilePhone().withMessage("Numero de telefono inválido"),
    check("password").isLength({min:8, max:undefined}).isAlphanumeric().withMessage("Contraseña inválida: minimo 8 caracteres,letras(a-z,A-Z) y números"),
    body('confirmation').custom((value, { req }) => {
        if (value !== req.body.password) { 
            throw new Error('Las contraseñas deben ser iguales');
        } return true 
    }), 
  ],
  checkUser,
  usersController.postRegister);

// GET Profile page
router.get('/:id/profile',assertSignedIn, userProfile, usersController.getProfile);

// PUT Profile user data
router.put(
  '/:id/edit-data',
  uploadUser.single("avatar"),
  [
    check("name").isLength({min:4,max:30}).withMessage("El nombre debe tener entre 4 y 30 caracteres de largo"),
    check("userName").isLength({min:4,max:15}).withMessage("El nombre de usuario debe tener entre 4 y 15 caracteres de largo"),
    check("email").isEmail().withMessage("Email inválido"),
  ],
  //checkUser,
  usersController.putUserData);

// PUT Profile user data
router.put(
  '/:id/edit-password',
  [
    check("password", "La constraseña actual es requerida.").notEmpty(),
    check("new_password", "La nueva constraseña es requerida.").notEmpty(),
    check("new_password", "La nueva constraseña debe tener al menos 8 caracteres.").isLength({ min: 8 }),
    body('confirmation').custom((value, { req }) => {
        if (value !== req.body.new_password) { 
            throw new Error('Las contraseñas deben ser iguales');
        } return true 
    }),
  ],
  usersController.putUserPassword);

// GET Confirmation Register page
router.get('/register/confirmation', usersController.getConfirmation);

// DESTTROY User Session
router.delete("/destroy-session", usersController.destroySession);

module.exports = router;
