export default function makePostStudentWord ({addStudentWord})
{
    return async function postStudentWord(httpRequest)
    {
        try
        {


            let studentWordId = await addStudentWord({_id : httpRequest.body._id, 
                targetLanguage : httpRequest.body.targetLanguage, 
                nativeLanguage : httpRequest.body.nativeLanguage,
                date : httpRequest.body.date,
                addedLanguages : httpRequest.body.addedLanguages});
            
            return {
                headers: {
                    'Content-Type': "application/json"
                },
                statusCode: 200,
                body: {success: "true", _id : studentWordId}
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