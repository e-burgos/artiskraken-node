// require
const express = require('express');
const router = express.Router();
const shopsController = require('../controllers/shopsController');
const couponsController = require("../controllers/couponsController");
const shippingMethodsController = require("../controllers/shippingMethodsController");
const paymentsController = require("../controllers/paymentsController");
const {check,validationResult, body}= require("express-validator");

// Utils
const multerOneImage = require("../utils/multer/multerOneImage");
const uploadShop = multerOneImage('shops');

// Middlewares
const assertSignedIn = require('../middlewares/assert-signed-in');

// GET shops page
router.get('/shopping', shopsController.getShops);

/* GET shops searching page. */
router.get("/shopping/search", shopsController.getQuerySearch);

/* Post shops searching page. */
router.post("/shopping/search", shopsController.postQuerySearch);

// GET shop details page
router.get('/shop-details/:id', shopsController.getShopDetails);

// GET shops details categories filter page
router.get('/shop-details/:id/categories', shopsController.getQueryShopDetailsCategory);

// GET shops details types filter page
router.get('/shop-details/:id/types', shopsController.getQueryShopDetailsTypes);

/* GET shop details searching page. */
router.get("/shop-details/:id/search", shopsController.getQueryShopDetailsSearch);

/* Post shop details searching page. */
router.post("/shop-details/:id/search", shopsController.postQueryShopDetailsSearch);


// POST create shop modal
router.post(
  '/create-shop',  
  uploadShop.single("avatar"),
  [
    check("name", "El nombre de la tienda es requerido.").notEmpty(),
    check("email", "El nombre de la tienda es requerido.").notEmpty(),
    check("email", "Email inválido.").isEmail(),
    check("phone", "El teléfono de la tienda es requerido.").notEmpty(),
    check("bio", "Una pequeña descripcion de la tienda es requerida.").notEmpty(),
  ],
  shopsController.postShopCreate);

// GET shop profile
router.get('/:id/profile', assertSignedIn, shopsController.getShop);

// PUT Profile shop data
router.put(
  '/:id/edit-data',
  uploadShop.single("avatar"),
  [
    check("name").isLength({min:4,max:30}).withMessage("El nombre debe tener entre 4 y 30 caracteres de largo"),
    check("email").isEmail().withMessage("Email inválido"),
  ],
  shopsController.putShopData);


//******************* Coupons Routes *******************//

// POST create coupon
router.post(
  '/:shop/create-coupon',
  assertSignedIn,   
  [
    check("name", "El nombre del cupón es requerido.").notEmpty(),
    check("description", "La descripción del cupón es requerida.").notEmpty(),
    check("discount", "El descuento del cupón es requerido.").notEmpty(),
    check("couponCode", "El código del cupón es requerido.").notEmpty(),
  ],
  couponsController.createCoupon);

// PUT edit coupon
router.put(
  '/:shop/:id/edit-coupon',
  assertSignedIn, 
  [
    check("name", "El nombre del cupón es requerido.").notEmpty(),
    check("description", "La descripción del cupón es requerida.").notEmpty(),
    check("discount", "El descuento del cupón es requerido.").notEmpty(),
    check("couponCode", "El código del cupón es requerido.").notEmpty(),
  ],
  couponsController.updateCoupon);

// POST blocked coupon 
router.post('/:shop/:id/coupon-blocked', assertSignedIn, couponsController.blockedCoupon);

// POST activate coupon 
router.post('/:shop/:id/coupon-activate', assertSignedIn, couponsController.activateCoupon);

// DELETE coupon 
router.delete('/:shop/:id/coupon-destroy', assertSignedIn, couponsController.destroyCoupon);


//******************* ShippingMethods Routes *******************//

// POST create ShippingMethods
router.post(
    "/:shop/create-shipping-method",
    assertSignedIn,
    [
        check("name", "El nombre es requerido.").notEmpty(),
        check("description", "La descripción es requerida.").notEmpty(),
        check("location", "La ubicación es requerida.").notEmpty(),
        check("status", "El estado es requerido.").notEmpty(),
        check("amount", "La cantidad e requerida es requerido.").notEmpty(),
    ],
    shippingMethodsController.create
);

// PUT edit ShippingMethods
router.put(
    "/:shop/:id/edit-shipping-method",
    assertSignedIn,
    [
        check("name", "El nombre es requerido.").notEmpty(),
        check("description", "La descripción es requerida.").notEmpty(),
        check("location", "La ubicación es requerida.").notEmpty(),
        check("status", "El estado es requerido.").notEmpty(),
        check("amount", "La cantidad e requerida es requerido.").notEmpty(),
    ],
    shippingMethodsController.update
);

// DELETE ShippingMethods 
router.delete(
    "/:shop/:id/destroy-shipping-method",
    assertSignedIn,
    shippingMethodsController.destroy
);

//******************* Payments Routes *******************//

// POST create Payments
router.post(
    "/:shop/create-payment",
    assertSignedIn,
    [
        check("name", "El nombre es requerido.").notEmpty(),
        check("description", "La descripción es requerida.").notEmpty(),
        check("type", "El tipo de pago es requerido.").notEmpty(),
        check("status", "El estado es requerido.").notEmpty(),
    ],
    paymentsController.create
);

// PUT edit Payments
router.put(
    "/:shop/:id/edit-payment",
    assertSignedIn,
    [
        check("name", "El nombre es requerido.").notEmpty(),
        check("description", "La descripción es requerida.").notEmpty(),
        // check("type", "El tipo de pago es requerido.").notEmpty(),
        // check("status", "El estado es requerido.").notEmpty(),
    ],
    paymentsController.update
);

// PUT edit Payments
router.put(
    "/:shop/:id/config-mp-payment",
    assertSignedIn,
    paymentsController.updateMercadoPago
);

// DELETE Payments 
router.delete(
    "/:shop/:id/destroy-payment",
    assertSignedIn,
    paymentsController.destroy
);

module.exports = router;