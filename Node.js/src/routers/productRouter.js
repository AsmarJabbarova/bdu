const router = require("express").Router();
// const { postProduct } = require("../controllers/productControllers");
const productControllers = require("./../controllers/productControllers");

// router.post("/products", productControllers/postProducts);
router.get("/products",productControllers.getAllProduct)
router.post("/products",productControllers.postProduct)

module.exports = router;