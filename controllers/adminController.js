// Services
const userService = require("../services/userService");
const productService = require("../services/productService");
const shopService = require("../services/shopService");
const categoryService = require("../services/categoryService");
const typeService = require("../services/typeService");
const paymentService = require("../services/paymentService");
const orderService = require("../services/orderService");
const commentService = require("../services/commentService");
const couponService = require("../services/couponService");
const shippingMethodService = require("../services/shippingMethodService");

// Controllers
const usersController = require("../controllers/admin/usersController");
const productsController = require("../controllers/admin/productsController");
const ordersController = require("../controllers/admin/ordersController");
const shopsController = require("../controllers/admin/shopsController");
const commentsController = require("../controllers/admin/commentsController");
const categoriesController = require("../controllers/admin/categoriesController");
const typesController = require("../controllers/admin/typesController");
const shippingMethodsController = require("../controllers/admin/shippingMethodsController");
const paymentsController = require("../controllers/admin/paymentsController");
const couponsController = require("../controllers/admin/couponsController");


const adminController = {
    
    //GET admin Profile
    getAdminProfile: async (req, res, next) => {
        const loggedUserId = req.session.loggedUserId;
        
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
            let currentUser = await userService.findOne(loggedUserId);
            let users = await userService.findAll();
            let categories = await categoryService.findAll();
            let types = await typeService.findAll();
            let shops = await shopService.findAll();
            let products = await productService.findAll();
            let payments = await paymentService.findAll();
            let orders = await orderService.findAll();
            let shippingMethods = await shippingMethodService.findAll();
            let comments = await commentService.findAll();
            let coupons = await couponService.findAll();

            
            res.render("admin/admin-profile", {
                notification: notification,
                message: message,
                errors: validateErrors,
                admin: currentUser,
                users: users, 
                categories: categories,
                types: types,
                shops: shops,
                products: products,
                payments: payments,
                orders: orders,
                shippingMethods: shippingMethods,
                comments: comments,
                coupons: coupons
            });
        } catch (error) {
            res.status(400).send(error.message);
        }
    },

    //******************* Users Controllers *******************//

    //POST create user form
    postCreateUserForm: usersController.create,

    // POST blocked user 
    postBlockedUser: usersController.blocked,

    // POST activate user 
    postActivateUser: usersController.activate,

    //DELETE user
    destroyUser: usersController.destroy,

    //******************* Shops Controllers *******************//

    //POST create shop
    postCreateShop: shopsController.create,

    //POST block shop
    postBlockedShop: shopsController.blocked,

    //POST activate shop
    postActivateShop: shopsController.activate,

    //DELETE shop
    destroyShop: shopsController.destroy,

    //******************* Products Controllers *******************//

    //POST create product
    postCreateProduct: productsController.create,
    
    //POST blocked product
    postBlockedProduct: productsController.blocked,

    //POST activate product
    postActivateProduct: productsController.activate,

    //******************* Order Controllers *******************//

    //POST create order
    postCreateOrder: ordersController.create,

    //PUT Edit Order
    putEditOrder: ordersController.update,

    // DELETE Order
    destroyOrder: ordersController.destroy,

    //******************* Comments Controllers *******************//

    //DELETE comment
    destroyComment: commentsController.destroy,

    //******************* Categories Controllers *******************//

    //POST create category
    postCreateCategory: categoriesController.create,

    //PUT edit category
    putEditCategory: categoriesController.update,

    //DELETE category
    destroyCategory: categoriesController.destroy,

    //******************* Types Controllers *******************//

    //POST create type
    postCreateType: typesController.create,

    //PUT edit type
    putEditType: typesController.update,

    //DELETE type
    destroyType: typesController.destroy,

    //******************* Coupon Controllers *******************//

    //POST create coupon
    postCreateCoupon: couponsController.create,

    //PUT edit coupon
    putEditCoupon: couponsController.update,

    //POT blocked coupon
    postBlockedCoupon: couponsController.blocked,

    //POST activate coupon
    postActivateCoupon: couponsController.activate,

    //DELETE coupon
    destroyCoupon: couponsController.destroy,

    //******************* Payments Controllers *******************//

    //POST create payment
    postCreatePayment: paymentsController.create,

    //PUT edit payment
    putEditPayment: paymentsController.update,

    // DELETE Payment
    destroyPayment: paymentsController.destroy,

    //******************* Shipping Method Controllers *******************//

    //POST create Shipping Method
    postCreateShippingMethod: shippingMethodsController.create,

    //PUT Edit Shipping Method
    putEditShippingMethod: shippingMethodsController.update,

    // DELETE ShippingMethod
    destroyShippingMethod: shippingMethodsController.destroy,
};

module.exports = adminController;