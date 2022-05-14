import { Router } from 'express';
import products from '../controllers/products.controler';

const router = Router();

router.get(
  '/',
  products.getAll,
);

router.get(
  '/:id',
  products.getById,
);

router.post(
  '/',
  products.create,
);

router.put(
  '/:id',
  products.update,
);

router.delete(
  '/:id',
  products.delete
)




export default router;
