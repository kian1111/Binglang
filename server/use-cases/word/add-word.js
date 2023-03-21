export default function makeAddWord ({userDb, Id})
{
    return async function addWord({created_by = null, targetLanguage = null, date = null, nativeLanguage = null, addedLanguages = null} = {})
    {
        if(created_by == null) { throw new Error('created_by is required') }
        
        const addWordByQuery = await userDb.addWord({created_by : created_by ? Id.convertToObjectID(created_by) : null, targetLanguage, nativeLanguage, date, addedLanguages});
        
        return addWordByQuery;
    }
}