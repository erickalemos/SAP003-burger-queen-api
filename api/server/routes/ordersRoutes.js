import { Router } from 'express';
import OrdersController from '../controllers/OrdersController';

const router = Router()
router.get('/', OrdersController.getAll)
router.get('/:id', OrdersController.getId)
router.post('/', OrdersController.postorders)
router.put('/:id', OrdersController.updatedorders)
router.delete('/:id', OrdersController.deleteorders)

export default router;