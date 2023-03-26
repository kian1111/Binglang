export default function makeAddNote ({userDb, Id})
{
    return async function addNote({_id = null, notes = null, date = null} = {})
    {
        if(_id == null) { throw new Error('created_by is required') }
        
        const addNoteByQuery = await userDb.addNote({_id : _id ? Id.convertToObjectID(_id) : null, notes, date});
        
        return addNoteByQuery;
    }
}