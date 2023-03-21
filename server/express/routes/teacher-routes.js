import express from 'express'

import authValidations from '../validation/auth-validations.js'
import {
    getStudents, getStudentWords, postStudentWord
} from '../../controllers/teacher/index.js'

import { body } from 'express-validator'

export default function makeTeacherRoutes({makeCallback, authMiddleware})
{
    const router = express.Router();

    router.get('/student',authMiddleware.auth(), makeCallback(getStudents))
    router.get('/student/word',authMiddleware.auth(), makeCallback(getStudentWords))
    router.post('/student/word',authMiddleware.auth(), makeCallback(postStudentWord))





    return router;
}