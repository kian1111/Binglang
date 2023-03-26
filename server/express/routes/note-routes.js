import express from 'express'

import authValidations from '../validation/auth-validations.js'
import {
        getNotes,postNote
} from '../../controllers/note/index.js'

import { body } from 'express-validator'

export default function makeNoteRoutes({makeCallback, authMiddleware})
{
    const router = express.Router();

    router.get('/',authMiddleware.auth(), makeCallback(getNotes))
    router.post('/',authMiddleware.auth(), makeCallback(postNote))







    return router;
}