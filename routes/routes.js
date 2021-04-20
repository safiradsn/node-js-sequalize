// import express
import express from "express";
//import controller product
import {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} from "../controllers/Product.js";

// init express router
const router = express.Router();

// route get semua product
router.get('/produk', getProducts);
// route get product by id
router.get('/products/:id', getProductById);
// route create product baru
router.post('/products', createProduct);
// route update product by id
router.put('/products/:id', updateProduct);
// route delete product by id
router.delete('/products/:id', deleteProduct);

// export router
export default router;