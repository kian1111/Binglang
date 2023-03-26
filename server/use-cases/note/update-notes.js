export default function makeUpdateNote ({userDb})
{
    return async function updateNote({date = null, notes = null} = {})
    {
        if(!date) { throw new Error('_id is required') }
        
        const updateNoteByQuery = await userDb.updateNote({date, notes});
        
        return updateNoteByQuery;
    }
}