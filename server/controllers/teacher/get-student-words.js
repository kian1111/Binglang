export default function makeGetStudentWords ({fetchStudentWords})
{
    return async function getStudentWords(httpRequest)
    {
        try
        {
            
            let studentWordList = await fetchStudentWords({_id : httpRequest.query._id, startDate : httpRequest.query.startDate, endDate : httpRequest.query.endDate });
            
            if (!studentWordList) {
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
                body: {studentWordList}
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