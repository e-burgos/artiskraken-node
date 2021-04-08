const express = require('express');
const storeController = require('../controllers/storeController')
const router = express.Router();
const {check,validationResult, body}= require("express-validator");

/* GET store page. */
router.get('/', storeController.getStore);

/* GET store page. */
router.get("/search", storeController.getQuerySearch);

/* GET store page. */
router.post("/search", storeController.postQuerySearch);

/* GET store query categories page. */
router.get("/categories", storeController.getQueryCategory);

/* GET store query types page. */
router.get("/types", storeController.getQueryType);

/* GET cart page. */
router.get('/productCart', storeController.getCart);

/* GET checkout page. */
router.get('/checkout', storeController.getCheckout);

/* POST checkout page. */
router.post('/checkout/current-user', storeController.postCheckout);

/* POST checkout page. */
router.post('/checkout', 
[
    check("name", "El nombre debe tener entre 4 y 50 caracteres de largo").isLength({min:4,max:35}),
    check("name", "Tu nombre es requerido.").notEmpty(),
    check('dni', 'El campo "DNI/CUIT" es requerido').notEmpty(),
    check("dni", "En DNI/CUIT debe tener entre 8 y 11 caracteres").isLength({min:8,max:11}),
    check('billingCountry', 'El campo "país" es requerido').notEmpty(),
    check('billingProvince', 'El campo "provincia" es requerido').notEmpty(),
    check('billingCity', 'El campo "ciudad" es requerido').notEmpty(),
    check('billingPostalCode', 'El campo "código postal" es requerido').notEmpty(),
    check('billingAddress', 'El campo "dirección" es requerido').notEmpty(),
    check('email', 'El email ingresado debe ser un email válido').isEmail(),
    check('phone', 'El teléfono ingresado es inválido').isMobilePhone(),
    check('shippingCheck', 'Debe decirdir si deseo otro dirección de envío').notEmpty(),
    check('shippingMethod', 'El método de envío es requerido').notEmpty(),
    check('paymentMethod', 'El método de pago es requerido').notEmpty(),
],
storeController.postCheckout);

module.exports = router;