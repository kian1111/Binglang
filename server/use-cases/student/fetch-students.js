export default function makeFetchStudents ({userDb, Id})
{
    return async function fetchStudents({_id = null} = {})
    {
        if(_id == null) { throw new Error('_id is required') }
        
        const fetchedStudentsByQuery = await userDb.findStudents({_id: _id ? Id.convertToObjectID(_id) : null});
        
        return fetchedStudentsByQuery;
    }
}