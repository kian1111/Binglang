import express from 'express'

import authValidations from '../validation/auth-validations.js'
import {
    postWord, getWord, deleteWord, putWord
} from '../../controllers/word/index.js'

import { body } from 'express-validator'

export default function makeWordRoutes({makeCallback, authMiddleware})
{
    const router = express.Router();

    router.post('/',authMiddleware.auth(), makeCallback(postWord))
    router.get('/',authMiddleware.auth(), makeCallback(getWord))
    router.delete('/:wordId',authMiddleware.auth(), makeCallback(deleteWord))
    router.put('/:wordId',authMiddleware.auth(), makeCallback(putWord))




    return router;
}