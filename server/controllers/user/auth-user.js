export default function makeAuthUser ({fetchUsers, passwordManager, authManager})
{
    return async function authUser(httpRequest)
    {
        try
        {
            let user = await fetchUsers({username : httpRequest.body.username});
            user = user[0];

            if (!user) {
                return {
                    headers: {
                        'Content-Type': "application/json"
                    },
                    statusCode: 401,
                    body: {
                        code: "AUTH_ERROR",
                        error: "Invalid username or password"
                    }
                }
            }

            let verifyPassword = await passwordManager.verify(httpRequest.body.password, user.password);

            if(!verifyPassword){
                return {
                    headers: {
                        'Content-Type': "application/json"
                    },
                    statusCode: 401,
                    body: {
                        code: "AUTH_ERROR",
                        error: "Invalid username or password"
                    }
                }
            }
            
            const authToken = authManager.makeAuthToken({_id : user._id, account_type : user.account_type} );
            
            return {
                headers: {
                    'Content-Type': "application/json"
                },
                statusCode: 200,
                body: {token: authToken, account_type: user.account_type, username : user.username, _id : user._id}
            }
        }
        catch(e)
        {
            console.log(e);

            return {
                headers: {
                    'Content-Type': 'application/json'
                },
                statusCode: 400,
                body: {
                    code: e.stack.split(":")[0],
                    error: e.message
                }
            }
        }
    }
}