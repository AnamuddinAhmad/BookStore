const router = require("express").Router();

const isLogedIn = require("../middlewares/isLogedIn.js");
const { register } = require("../controllers/user/singup.js");
const { singin } = require("../controllers/user/singin.js");
const { logout } = require("../controllers/user/logout.js");
const { home } = require("../controllers/user/home.js");
const { updateAddress } = require("../controllers/user/updateAddress.js");
const { addToCart } = require("../utils/addToCart.js");
const { removeToCart } = require("../utils/removeToCart.js");
const { cart } = require("../utils/cart.js");

//Singup User
router.post("/singup", register);
router.post("/singin", singin);
router.post("/logout", isLogedIn, logout);
router.get("/home", isLogedIn, home);
router.put("/update-address", isLogedIn, updateAddress);

//Add to Cart
router.put("/addtocart", isLogedIn, addToCart);
router.patch("/removetocart", isLogedIn, removeToCart);
router.get("/cart", isLogedIn, cart);

//add to favourate.
// router.post()

module.exports = router;
