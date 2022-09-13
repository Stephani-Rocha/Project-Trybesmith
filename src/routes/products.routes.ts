import { Router } from 'express';
import ProductController from '../controllers/product.controller';

const router = Router();

const productController = new ProductController();

router.post('/products', productController.create);
router.get('/products', productController.getAll);

export default router;