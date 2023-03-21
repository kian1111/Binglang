import express from 'express'

import authValidations from '../validation/auth-validations.js'
import {
        getSettings
} from '../../controllers/settings/index.js'

import { body } from 'express-validator'

export default function makeSettingsRoutes({makeCallback, authMiddleware})
{
    const router = express.Router();

    router.get('/',authMiddleware.auth(), makeCallback(getSettings))






    return router;
}