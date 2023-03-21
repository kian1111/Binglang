export default function makeAddStudentWord ({userDb, Id})
{
    return async function addStudentWord({_id = null, targetLanguage = null, date = null, nativeLanguage = null, addedLanguages = null} = {})
    {
        if(_id == null) { throw new Error('created_by is required') }
        
        const addStudentWordByQuery = await userDb.addStudentWord({_id : _id ? Id.convertToObjectID(_id) : null, targetLanguage, nativeLanguage, date, addedLanguages});
        
        return addStudentWordByQuery;
    }
}