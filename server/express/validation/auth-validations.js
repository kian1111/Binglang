
import validate from 'express-joi-validate'
import Joi from '@hapi/joi'

const validations = {
    "POST/" : validate({
        body: {
            username: Joi.string().max(128).required(),
            password: Joi.string().required()
        }
    })

}

export default validations;