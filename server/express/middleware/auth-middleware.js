export default function makeAuthMiddleware(authenticator)
{
    const auth = (accountType) => { 

        return function (req, res, next)
        {
            try
            {
                let token = req.header('Authorization');
                if(!token)
                {
                    res.status(401).json({"error": "Authorization header is required for authentication"});
                    return;
                }

                const authData = authenticator.authenticate(token);

                if(accountType && authData.account_type !== accountType)
                {
                    res.status(401).json({"error":"This request is reserved for accounts of type "+accountType});
                }

                req.auth = authData;

                next();
            }
            catch(err)
            {
                res.status(401).json({"error":err.message});
            }  
        }
    }

    const optional = ()  => {
        return function (req, res, next)
        {
            try
            {
                let token = req.header('Authorization');
                if(!token)
                {
                    next();
                }
                else
                {
                    const authData = authenticator.authenticate(token, true);

                    if(authData)
                    {
                        req.auth = authData;
                        next();
                    }
                    else
                    {
                        next();
                    }
                }
            }
            catch(err)
            {
                res.status(401).json({"error":err.message});
            }  
        }
    }


    return Object.freeze({
        auth: () => auth(null),
        authUser: () => auth("USER"),
        authAdmin: () => auth("ADMIN"),
        optional: () => optional()
    });
}
