export default function makeUpdateWord ({userDb, Id})
{
    return async function updateWord({_id = null, targetLanguage = null, nativeLanguage = null} = {})
    {
        if(_id == null) { throw new Error('_id is required') }
        
        const updateWordByQuery = await userDb.updateWord({_id : _id ? Id.convertToObjectID(_id) : null, targetLanguage, nativeLanguage });
        
        return updateWordByQuery;
    }
}