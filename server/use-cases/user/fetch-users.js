
export default function makeFetchUsers ({userDb, Id})
{
    return async function fetchUsers({_id = null, username = null, email = null} = {})
    {
        if(_id == null && username == null) { throw new Error('Either _id or username is required') }
       
        
        const fetchedUsersByQuery = await userDb.find({_id: _id ? Id.convertToObjectID(_id) : null, username});
        
        return fetchedUsersByQuery;
    }
}