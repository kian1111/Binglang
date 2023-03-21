
export default function makeUserDb({makeDb})
{
    const find = async ({_id = null, username = null} = {}) => {
        let searchQuery = {};
        if(_id !== null){ searchQuery["_id"] = _id }
        if(username !== null){ searchQuery["username"] = username}

        const db = await makeDb();
        const result = await db.getCollection('users').find(searchQuery);
        
        return result;
    }

    const addWord = async ({created_by = null, targetLanguage = null, date = null, nativeLanguage = null, addedLanguages = null} = {}) => {


        const db = await makeDb();


        let result = await db.getCollection('words').insert({
            created_by : created_by,
            targetLanguage : targetLanguage,
            nativeLanguage : nativeLanguage,
            date : new Date(date), 
            addedLanguages : addedLanguages
        })
     
        return result.insertedId;

    }

    const findWords = async ({_id = null, startDate = null, endDate = null} = {}) => {
        
        const db = await makeDb();

        const result = await db.getCollection('words').find({created_by : _id, 
   
            date : {
                    $gte: new Date(startDate),
                    $lte: new Date(endDate)
                }
                
            });
        
        return result;
    
    }

    const deleteWord = async ({_id = null} = {}) => {
        let searchQuery = {};
        console.log("id delete", _id)
        if(_id !== null){ searchQuery["_id"] = _id }

        console.log("search", searchQuery)
        const db = await makeDb();
        await db.getCollection('words').delete(searchQuery)



        return {success : 200};
    
    }

    const updateWord = async ({_id = null, targetLanguage = null, nativeLanguage = null} = {}) => {
        let updateQuery = {}
        const db = await makeDb();

        updateQuery = {targetLanguage, nativeLanguage}

        let result = await db.getCollection('words').update({_id},{$set:updateQuery})
     
        return result;

    }

    const findStudents = async ({_id = null} = {}) => {
        
        const db = await makeDb();

        const result = await db.getCollection('users').find({teacher_id : _id
   
                
            });
        
        return result;
    
    }

    const findStudentWords = async ({_id = null, startDate = null, endDate = null} = {}) => {
        
        const db = await makeDb();

        const result = await db.getCollection('words').find({created_by : _id, 
   
            date : {
                    $gte: new Date(startDate),
                    $lte: new Date(endDate)
                }
                
            });
        
        return result;
    
    }

    const addStudentWord = async ({_id = null, targetLanguage = null, date = null, nativeLanguage = null, addedLanguages = null} = {}) => {


        const db = await makeDb();


        let result = await db.getCollection('words').insert({
            created_by : _id,
            targetLanguage : targetLanguage,
            nativeLanguage : nativeLanguage,
            date : new Date(date), 
            addedLanguages : addedLanguages
        })
     
        return result.insertedId;

    }


  
    return Object.freeze({ 
        find,
        addWord,
        findWords,
        deleteWord,
        updateWord,
        findStudents,
        findStudentWords,
        addStudentWord
    });
}