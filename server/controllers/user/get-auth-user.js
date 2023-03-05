export default function makeGetAuthUser ({fetchUsers})
{
    return async function getAuthUser(httpRequest)
    {
        try
        {
            let user = await fetchUsers({_id : httpRequest.auth._id});
            user = user[0];

            if (!user) {
                return {
                    headers: {
                        'Content-Type': "application/json"
                    },
                    statusCode: 404,
                    body: {code: "AUTH_ERROR", error: "User not found"}
                }
            }
            
            return {
                headers: {
                    'Content-Type': "application/json"
                },
                statusCode: 200,
                body: {username: user.username, account_type: user.account_type, _id : user._id}
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