export default function makeFetchStudentWords ({userDb, Id})
{
    return async function fetchStudentWords({_id = null, startDate = null, endDate = null} = {})
    {
        if(_id == null) { throw new Error('_id is required') }
        
        const fetchedStudentWordsByQuery = await userDb.findStudentWords({_id: _id ? Id.convertToObjectID(_id) : null, startDate, endDate });
        
        return fetchedStudentWordsByQuery;
    }
}