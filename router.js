import express from 'express';
import { addOrUpdateDish, getAllDishes } from './controller/dish.js';
import { handleError } from './middlewares/error.js';

const router = express.Router()


router.get('/get_all_dishes',handleError(getAllDishes))

router.post('/add_dishes',handleError(addOrUpdateDish))

export default router