export default function makePostBulkStudentWord({ addBulkStudentWord }) {
    return async function postBulkStudentWord(httpRequest) {
        try {

            let bulkstudentWordId = await addBulkStudentWord({
                created_by: httpRequest.body._id, bulkWord: httpRequest.body.bulkWord
            });

            return {
                headers: {
                    'Content-Type': "application/json"
                },
                statusCode: 200,
                body: { success: "true", _id: bulkstudentWordId }
            }
        }
        catch (e) {
            console.log(e);

            return {
                headers: {
                    'Content-Type': 'application/json'
                },
                statusCode: 400,
                body: {
                    code: e.stack.split(":")[0],
                    error: e.message
                }
            }
        }
    }
}