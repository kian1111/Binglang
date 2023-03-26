export default function makeFetchNotes ({userDb, Id})
{
    return async function fetchNotes({_id = null, startDate = null, endDate = null} = {})
    {
        console.log("use-cases", _id)
        if(_id == null) { throw new Error('_id is required') }
        
        const fetchedNotesByQuery = await userDb.findNotes({_id: _id ? Id.convertToObjectID(_id) : null, startDate, endDate });
        
        return fetchedNotesByQuery;
    }
}