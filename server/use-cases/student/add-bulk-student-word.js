export default function makeAddBulkStudentWord ({userDb, Id})
{
    return async function addBulkStudentWord({created_by = null, bulkWord = null} = {})
    {
        if(created_by == null) { throw new Error('created_by is required') }
        
        const addBulkStudentWordByQuery = await userDb.addBulkStudentWord({created_by : created_by ? Id.convertToObjectID(created_by) : null, bulkWord});
        
        return addBulkStudentWordByQuery;
    }
}