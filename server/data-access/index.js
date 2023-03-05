import mongoDB from '../db/mongoDB.js'

import makeUserDb from './user-db.js'




const makeDb = async () => {

    if(!mongoDB.isConnected())
    {
        try
        {
            await mongoDB.connect()
        }
        catch(err)
        {
            throw new Error("Could not connect to DB: "+err.message)
        }
    }

    return mongoDB
}


export const userDb = makeUserDb({makeDb})
