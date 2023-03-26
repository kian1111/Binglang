
export default function makePostNote ({addNote, fetchNotesByDate, updateNote})
{
    return async function postNote(httpRequest)
    {
        try
        {
            
            console.log("date",  httpRequest.body.date)

            let noteExist = await fetchNotesByDate({date : httpRequest.body.date})
            let noteId = {}
            if (noteExist.length === 1){
                await updateNote({date : httpRequest.body.date, notes : httpRequest.body.notes })
            }
            else {
                    noteId = await addNote({_id : httpRequest.body._id, 
                    notes : httpRequest.body.notes,
                    date : httpRequest.body.date});
            }

            
            
            return {
                headers: {
                    'Content-Type': "application/json"
                },
                statusCode: 200,
                body: {success: "true", _id : noteId}
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