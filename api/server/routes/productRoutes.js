import { Router } from 'express';
import ProductController from '../controllers/ProductController'

const router = Router()
router.get('/', ProductController.getAll)
router.get('/:id', ProductController.getId)
router.post('/', ProductController.postProduct)
router.put('/:id', ProductController.updatedProduct)
router.delete('/:id', ProductController.deleteProduct)
export default router