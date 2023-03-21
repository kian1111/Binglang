export default function makeGetWords ({fetchWords})
{
    return async function getWords(httpRequest)
    {
        try
        {

            let wordList = await fetchWords({_id : httpRequest.auth._id, startDate : httpRequest.query.startDate, endDate : httpRequest.query.endDate });

            if (!wordList) {
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
                body: {wordList}
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