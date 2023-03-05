import express from 'express'

import authValidations from '../validation/auth-validations.js'
import {
    authUser, getAuthUser
} from '../../controllers/user/index.js'

import { body } from 'express-validator'

export default function makeAuthRoutes({makeCallback, authMiddleware})
{
    const router = express.Router();

    router.post('/', authValidations["POST/"], makeCallback(authUser))
    router.get('/',authMiddleware.auth(), makeCallback(getAuthUser))



    return router;
}