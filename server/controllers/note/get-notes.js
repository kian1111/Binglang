export default function makeGetNotes ({fetchNotes})
{
    return async function getNotes(httpRequest)
    {
        try
        {
            
            let noteList = await fetchNotes({_id : httpRequest.query._id, startDate : httpRequest.query.startDate, endDate : httpRequest.query.endDate });

            
            if (!noteList) {
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
                body: {noteList}
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