export default function makePostWord ({addWord})
{
    return async function postWord(httpRequest)
    {
        try
        {


            let wordId = await addWord({created_by : httpRequest.auth._id, 
                targetLanguage : httpRequest.body.targetLanguage, 
                nativeLanguage : httpRequest.body.nativeLanguage,
                date : httpRequest.body.date,
                addedLanguages : httpRequest.body.addedLanguages});
            
            return {
                headers: {
                    'Content-Type': "application/json"
                },
                statusCode: 200,
                body: {success: "true", _id : wordId}
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