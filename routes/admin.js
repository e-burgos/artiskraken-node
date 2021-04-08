// require
const express = require('express');
const {check,validationResult, body}= require("express-validator");
const router = express.Router();
const adminController = require('../controllers/adminController');

// Utils
const multerOneImage = require("../utils/multer/multerOneImage");
const multerProducts = require("../utils/multer/multerProducts");

// Middlewares
const assertIsAdmin = require('../middlewares/assert-is-admin');
const assertSignedIn = require('../middlewares/assert-signed-in');
const checkUser = require("../middlewares/checkUser");

// Multer
const uploadUser = multerOneImage('users');
const uploadShop = multerOneImage('shops');
const productImages = multerProducts('products', 'avatar', 'gallery');


//******************* Admin Routes *******************//

// GET Admin Profile
router.get('/', assertSignedIn, assertIsAdmin, adminController.getAdminProfile);

//******************* Users Routes *******************//

// POST create user form 
router.post(
  '/create-user', 
  assertIsAdmin, 
  uploadUser.single("avatar"),
  [
    check("name", "El nombre no puede estar vacio").notEmpty(),
    check("userName", "El nombre de usuario no puede estar vacio").notEmpty(),
    check("email", "Email inválido").isEmail(),
    check("password", "La constraseña es requerida.").notEmpty(),
    check("password", "La constraseña debe tener al menos 8 caracteres.").isLength({ min: 8 }),
    check("password").isLength({min:8, max:undefined}).isAlphanumeric().withMessage("Contraseña inválida: minimo 8 caracteres,letras(a-zA-Z) y números"),
    body('confirmation').custom((value, { req }) => {
        if (value !== req.body.password) { 
            throw new Error('Las contraseñas deben ser iguales');
        } return true 
    }), 
  ],
  adminController.postCreateUserForm);

// POST blocked user 
router.post('/:id/user-blocked', assertIsAdmin, adminController.postBlockedUser);

// POST activate user 
router.post('/:id/user-activate', assertIsAdmin, adminController.postActivateUser);

// DELETE user 
router.delete('/:id/user-destroy', assertIsAdmin, adminController.destroyUser);

//******************* Products Routes *******************//

// POST create product modal 
router.post(
  '/create-product', 
  assertIsAdmin, 
  productImages,
    [
        check("shopId", "La tienda propietaria del producto es requerida.").notEmpty(),
        check("name", "El nombre es requerido.").notEmpty(),
        check("price", "El precio es requerido.").notEmpty(),
        check("price", "El precio debe ser un numero").isNumeric(),
        check("discount", "El descuento es requerido.").notEmpty(),
        check("discount", "El descuento es requerido.").isNumeric(),
        check("categoryId", "Seleccione una categoría").notEmpty(),
        check("typeId", "Seleccione un tipo de cerveza").notEmpty(),
        check("brewery", "La cervecería es requerida.").notEmpty(),
        check(
            "description",
            "La descripcion debe tener al menos 10 caracteres"
        ).isLength({ min: 10 }),
    ],
  adminController.postCreateProduct);

// POST Blocked product     
router.post("/:id/product-blocked", assertSignedIn, assertIsAdmin, adminController.postBlockedProduct);

// POST Activate product     
router.post("/:id/product-activate", assertSignedIn, assertIsAdmin, adminController.postActivateProduct);

//******************* Shops Routes *******************//

// POST create shop
router.post(
  '/create-shop', 
  assertIsAdmin, 
  uploadShop.single("avatar"),
  [
    check("name", "El nombre de la tienda es requerido.").notEmpty(),
    check("email", "Email inválido.").isEmail(),
  ],
  adminController.postCreateShop);

// POST blocked shop 
router.post('/:id/shop-blocked', assertIsAdmin, adminController.postBlockedShop);

// POST activate shop 
router.post('/:id/shop-activate', assertIsAdmin, adminController.postActivateShop);

// DELETE shop 
router.delete('/:id/shop-destroy', assertIsAdmin, adminController.destroyShop);

//******************* Comments Routes *******************//

// DELETE category 
router.delete('/:id/comment-destroy', assertIsAdmin, adminController.destroyComment);

//******************* Categories Routes *******************//

// POST create category
router.post(
  '/create-category', 
  assertIsAdmin, 
  [
    check("name", "El nombre de la categoría es requerido.").notEmpty(),
    check("description", "La descripción de la categoría es requerida.").notEmpty(),
    check("typeId", "El tipo de cerveza es requerido.").notEmpty(),
  ],
  adminController.postCreateCategory);

// PUT edit category
router.put(
  '/:id/edit-category',
  assertSignedIn, 
  assertIsAdmin, 
  [
    check("name", "El nombre de la categoría es requerido.").notEmpty(),
    check("description", "La descripción de la categoría es requerida.").notEmpty(),
    check("typeId", "El tipo de cerveza es requerido.").notEmpty(),
  ],
  adminController.putEditCategory);

// DELETE category 
router.delete('/:id/category-destroy', assertIsAdmin, adminController.destroyCategory);

//******************* Types Routes *******************//

// POST create type
router.post(
  '/create-type', 
  assertIsAdmin, 
  [
    check("name", "El nombre del tipo de cerveza es requerido.").notEmpty(),
    check("description", "La descripción del tipo de cerveza es requerida.").notEmpty(),
  ],
  adminController.postCreateType);

// PUT edit type
router.put(
  '/:id/edit-type', 
  assertIsAdmin, 
  [
    check("name", "El nombre del tipo de cerveza es requerido.").notEmpty(),
    check("description", "La descripción del tipo de cerveza es requerida.").notEmpty(),
  ],
  adminController.putEditType);

// DELETE type 
router.delete('/:id/type-destroy', assertIsAdmin, adminController.destroyType);

//******************* Coupons Routes *******************//

// POST create coupon
router.post(
  '/create-coupon',
  assertSignedIn,  
  assertIsAdmin, 
  [
    check("name", "El nombre del cupón es requerido.").notEmpty(),
    check("description", "La descripción del cupón es requerida.").notEmpty(),
    check("discount", "El descuento del cupón es requerido.").notEmpty(),
    check("couponCode", "El código del cupón es requerido.").notEmpty(),
    check("shopId", "La tienda emisora del cupón es requerida.").notEmpty(),
  ],
  adminController.postCreateCoupon);

// PUT edit coupon
router.put(
  '/:id/edit-coupon',
  assertSignedIn, 
  assertIsAdmin, 
  [
    check("name", "El nombre del cupón es requerido.").notEmpty(),
    check("description", "La descripción del cupón es requerida.").notEmpty(),
    check("discount", "El descuento del cupón es requerido.").notEmpty(),
    check("couponCode", "El código del cupón es requerido.").notEmpty(),
    check("shopId", "La tienda emisora del cupón es requerida.").notEmpty(),
  ],
  adminController.putEditCoupon);

// POST blocked coupon 
router.post('/:id/coupon-blocked', assertIsAdmin, adminController.postBlockedCoupon);

// POST activate coupon 
router.post('/:id/coupon-activate', assertIsAdmin, adminController.postActivateCoupon);

// DELETE coupon 
router.delete('/:id/coupon-destroy', assertSignedIn, assertIsAdmin, adminController.destroyCoupon);

//******************* Payments Routes *******************//

// POST create payment
router.post(
  '/create-payment', 
  assertIsAdmin, 
  [
    check("name", "El nombre del método de pago es requerido.").notEmpty(),
    check("description", "La descripción del método de pago es requerida.").notEmpty(),
  ],
  adminController.postCreatePayment);

// PUT edit payment
  router.put(
    '/:id/edit-payment', 
    assertIsAdmin, 
    [
      check("name", "El nombre del método de pago es requerido.").notEmpty(),
      check("description", "La descripción del método de pago es requerida.").notEmpty(),
    ],
    adminController.putEditPayment);

// DELETE Payment 
router.delete('/:id/payment-destroy', assertIsAdmin, adminController.destroyPayment);

//******************* Orders Routes *******************//

// POST create order
router.post(
  '/create-order', 
  assertIsAdmin, 
  [
    check("email", "El campo 'email' debe ser un email válido.").isEmail(),
    check("count", "La cantidad de productos debe ser un número entero").isInt(),
    check("totalShipping", "El envío total debe ser un número decimal").isFloat(),
    check("tax", "El impuesto debe ser un número decimal").isFloat(),
    check("total", "El total debe ser un número decimal").isFloat(),
  ],
  adminController.postCreateOrder);

// PUT edit order
  router.put(
    '/:id/edit-order', 
    assertIsAdmin, 
    [
      check("name", "El nombre del método de pago es requerido.").notEmpty(),
      check("description", "La descripción del método de pago es requerida.").notEmpty(),
    ],
    adminController.putEditOrder);

// DELETE Order 
router.delete('/:id/order-destroy', assertIsAdmin, adminController.destroyOrder);

//******************* ShippingMethods Routes *******************//

// POST create Shipping Method
router.post(
  '/create-shippingMethod', 
  assertIsAdmin, 
  [
    check("name", "El nombre del método de envío es requerido.").notEmpty(),
    check("amount", "El el monto del envío es requerido.").notEmpty(),
    check("description", "La descripción del método de envío es requerido.").notEmpty(),
    check("location", "La ubicación del método de envío es requerido.").notEmpty(),
  ],
  adminController.postCreateShippingMethod);

// PUT edit Shipping Method
  router.put(
    '/:id/edit-shippingMethod', 
    assertIsAdmin, 
    [
      check("name", "El nombre del método de envío es requerido.").notEmpty(),
      check("amount", "El el monto del envío es requerido.").notEmpty(),
      check("description", "La descripción del método de envío es requerido.").notEmpty(),
      check("location", "La ubicación del método de envío es requerido.").notEmpty(),
    ],
    adminController.putEditShippingMethod);

// DELETE Shipping Method 
router.delete('/:id/shippingMethod-destroy', assertIsAdmin, adminController.destroyShippingMethod);

module.exports = router;