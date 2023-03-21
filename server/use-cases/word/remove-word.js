export default function makeRemoveWord ({userDb, Id})
{
    return async function removeWord({_id = null} = {})
    {
        if(_id == null) { throw new Error('_id is required') }
        
        const removeWordByQuery = await userDb.deleteWord({_id: _id ? Id.convertToObjectID(_id) : null});
        
        return removeWordByQuery;
    }
}