export default function makeFetchSettings ({userDb, Id})
{
    return async function fetchSettings({_id = null} = {})
    {
        if(_id == null) { throw new Error('_id is required') }
        
        const fetchedSettingsByQuery = await userDb.findSettings({_id: _id ? Id.convertToObjectID(_id) : null});
        
        return fetchedSettingsByQuery;
    }
}