const express = require('express');
const router = express.Router();
const productsController = require("../controllers/productsController");
const { check, validationResult, body } = require("express-validator");

// Utils
const multerProducts = require("../utils/multer/multerProducts");

// Middlewares
const assertIsSeller = require('../middlewares/assert-is-seller');
const assertSignedIn = require('../middlewares/assert-signed-in');

// Multer
const productImages = multerProducts('products', 'avatar', 'gallery');

/**** PRODUCTS ROUTES ****/

/* GET product detail page. */
router.get('/:id/productDetails', productsController.getDetails);

// GET Create product page
router.get(
    '/:shop/create',
    assertSignedIn, 
    assertIsSeller,
    productsController.getCreate);

// POST Create product page    
router.post(
    "/:shop/create",
    assertSignedIn,
    assertIsSeller,
    productImages,
    [
        check("name", "El nombre no puede estar vacio").notEmpty(),
        check("price", "El precio no puede estar vacio").notEmpty(),
        check("price", "El precio debe ser un numero").isNumeric(),
        check("discount", "El descuento no puede estar vacio").notEmpty(),
        check("discount", "El descuento debe ser un numero").isNumeric(),
        check("categoryId", "Seleccione una categoría").notEmpty(),
        check("typeId", "Seleccione un tipo de cerveza").notEmpty(),
        check("brewery", "La cervecería no debe estar vacia").notEmpty(),
        check(
            "description",
            "La descripcion debe tener al menos 10 caracteres"
        ).isLength({ min: 10 }),
    ],
    productsController.postCreate
);

/* POST product in server localstorage. */
//router.post("/:id/add-product", productsController.postOneProduct);

// GET Edit product page
router.get(
    '/:shop/:id/edit',
    assertSignedIn, 
    assertIsSeller,
    productsController.getEdit);

// PUT Edit product page
router.put(
    "/:shop/:id/edit",
    assertSignedIn,
    assertIsSeller,
    productImages,
    [
        check("name", "El nombre no puede estar vacio").notEmpty(),
        check("price", "El precio no puede estar vacio").notEmpty(),
        check("price", "El precio debe ser un numero").isNumeric(),
        check("discount", "El descuento no puede estar vacio").notEmpty(),
        check("discount", "El descuento debe ser un numero").isNumeric(),
        check("categoryId", "Seleccione una categoría").notEmpty(),
        check("typeId", "Seleccione un tipo de cerveza").notEmpty(),
        check("brewery", "La cervecería no debe estar vacia").notEmpty(),
        check(
            "description",
            "La descripcion debe tener al menos 10 caracteres"
        ).isLength({ min: 10 }),
    ],
    productsController.putEdit
);

// POST Blocked product     
router.post("/:shop/:id/product-blocked", assertSignedIn, assertIsSeller, productsController.postBlocked);

// POST Activate product     
router.post("/:shop/:id/product-activate", assertSignedIn, assertIsSeller, productsController.postActivate);

// DELETE one product 
router.delete(
    '/delete/:shop/:id',
    assertSignedIn, 
    assertIsSeller, 
    productsController.destroy);

/**** PRODUCT COMMENTS ROUTES ****/

// POST comments
router.post(
    "/:id/productDetails",
    assertSignedIn,
    [
        check("comment", "El descuento no puede estar vacio").notEmpty(),
    ],
    productsController.postComment
);

// DELETE comments
router.delete(
    '/deleteComment/:id', 
    assertSignedIn,
    productsController.destroyComment);

module.exports = router;
