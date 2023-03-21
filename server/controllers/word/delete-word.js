export default function makeDeleteWord ({removeWord})
{
    return async function deleteWord(httpRequest)
    {
        try
        {
            console.log("controller", httpRequest.params.wordId)
            await removeWord({_id : httpRequest.params.wordId});
            
            return {
                headers: {
                    'Content-Type': "application/json"
                },
                statusCode: 200,
                body: {success : true}
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