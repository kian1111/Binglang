import jwt from 'jsonwebtoken'

export default function makeJWTAuth(config)
{
    
    const makeAuthToken = ({_id = null, account_type = null} = {}) => {

        //validate input
        if(!_id){throw new Error('_id is required when creating an auth token')}
        if(!account_type){throw new Error('account_type is required when creating an auth token')}
        if( (['user','student','teacher', 'admin']).indexOf(account_type) < 0 ){throw new Error('account_type is invalid for authentication')}

        //create token
        let token = jwt.sign({_id, account_type}, config.getAuthSecret(), {expiresIn: config.getSessionExpireTime()});


        return token
    }


    const authenticate = (token, preventError = false) => {

        let verified = null;

        try
        {
            verified = jwt.verify(token,config.getAuthSecret());
        }
        catch(err)
        {
            if(preventError){return null}
            throw new Error('Authentication token is invalid or has expired');
        }

        if(!verified._id || !verified.account_type)
        {
            throw new Error("JWT token has the wrong structure");
        }

        return Object.freeze({
            _id: verified._id,
            account_type: verified.account_type
        });
        
    }

    
    return Object.freeze({
        makeAuthToken,
        authenticate
    })
}