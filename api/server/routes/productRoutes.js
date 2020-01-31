import { Router } from 'express';
import ProductController from '../controllers/ProductController'

const router = Router()
router.get('/', ProductController.getAll)
// router.post('/', ProductController.addAuthor)
// router.get('/:id', AuthorController.getAuthor)
// router.put('/:id', AuthorController.updatedAuthor)
// router.delete('/:id', AuthorController.deleteAuthor)
export default router