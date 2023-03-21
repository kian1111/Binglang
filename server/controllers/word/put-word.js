export default function makePutWord ({updateWord})
{
    return async function putWord(httpRequest)
    {
        try
        {

            let {data} = await updateWord({_id : httpRequest.params.wordId,
                targetLanguage : httpRequest.body.targetLanguage, 
                nativeLanguage : httpRequest.body.nativeLanguage,
            });
            
            return {
                headers: {
                    'Content-Type': "application/json"
                },
                statusCode: 200,
                body: {success: "true", data}
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