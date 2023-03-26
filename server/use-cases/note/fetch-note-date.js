export default function makeFetchNotesByDate ({userDb})
{
    return async function fetchNotesByDate({date = null} = {})
    {
        if(!date) { throw new Error('date is required') }
        
        const fetchedNotesByDateByQuery = await userDb.findNotesByDate({date});
        
        return fetchedNotesByDateByQuery;
    }
}