import { Router } from 'express';
import OrdersController from '../controllers/OrdersController'

const router = Router()
router.get('/', OrdersController.getAll)
router.get('/:id', OrdersController.getId)
router.post('/', OrdersController.postOrder)
router.put('/:id', OrdersController.updatedOrder)
router.delete('/:id', OrdersController.deleteOrder)

export default router