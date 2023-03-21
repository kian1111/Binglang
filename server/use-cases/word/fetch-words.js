export default function makeFetchWords ({userDb, Id})
{
    return async function fetchWords({_id = null, startDate = null, endDate = null} = {})
    {
        if(_id == null) { throw new Error('_id is required') }
        
        const fetchedWordsByQuery = await userDb.findWords({_id: _id ? Id.convertToObjectID(_id) : null, startDate, endDate });
        
        return fetchedWordsByQuery;
    }
}