import mongo from 'mongodb';

class MongoDB_getCollection
{
    constructor(db, collectionName)
    {
        this.db = db;
        this.collectionName = collectionName;
    }

    async find(obj,{sort = null} = {})
    {
        if("_id" in obj)
        {
            let ObjectID = mongo.ObjectId
            try
            {
                obj._id = new ObjectID(obj._id)
            }
            catch(err)
            {
                console.log(err)
                obj._id = null
            }
        }

        let collection = await this.db.collection(this.collectionName);

        if(sort)
        {
            return await collection.find(obj).sort(sort).toArray();
        }
        else
        {
            return await collection.find(obj).toArray();
        }
    }

    async insert(obj, makeAndReturnID = false)
    {
        let collection = await this.db.collection(this.collectionName);

        if(makeAndReturnID)
        {
            let ObjectID = mongo.ObjectId;
            let newID = new ObjectID();
            obj["_id"] = newID;
            try
            {
                await collection.insertOne(obj);
            }
            catch(err)
            {
                console.log("INSERT ERROR!");
                console.log(err.message);
            }

            return newID;
        }
        else
        {
            //returns {..., insertedId}
            return await collection.insertOne(obj);
        }
        
    }

    async update(query, obj)
    {
        return await this.updateOne(query, obj);
    }

    async updateOne(query, obj)
    {
        if("_id" in query)
        {
            let ObjectID = mongo.ObjectId
            query._id = new ObjectID(query._id)
        }

        let collection = await this.db.collection(this.collectionName);

        //returns {modifiedCount (int)}
        return await collection.updateOne(query, obj);
    }

    async updateMany(query, obj)
    {
        if("_id" in query)
        {
            let ObjectID = mongo.ObjectId
            query._id = new ObjectID(query._id)
        }

        let collection = await this.db.collection(this.collectionName);

        //returns {modifiedCount (int)}
        return await collection.updateMany(query, obj);
    }

    async replaceOne(filter, replacement)
    {
        let collection = await this.db.collection(this.collectionName)
        return await collection.replaceOne(filter, replacement, {upsert: true})
    }
    
    async aggregate(obj)
    {
        let collection = await this.db.collection(this.collectionName);
        let result = await collection.aggregate(obj);

        const toReturn = []
        await result.forEach(row => {
            toReturn.push(row);
        })

        return toReturn
    }

    async exists(obj)
    {
        let collection = await this.db.collection(this.collectionName);
        let result = await collection.find(obj).toArray();
        return result.length > 0;
    }

    async delete(obj)
    {
        let collection = await this.db.collection(this.collectionName);
        return await collection.deleteMany(obj);
    }
    
}

class MongoDB
{
    constructor()
    {
        this.mongoClient = mongo.MongoClient;
        this.database = null;
        this.connected = false;
    }

    getCollection(name)
    {
        return new MongoDB_getCollection(this.database, name);
    }

    isConnected()
    {
        return this.connected;
    }

    connect()
    {
        return new Promise((resolve, reject) => {
            this.mongoClient.connect(process.env.MONGO_URI, (err, db) => {  
                if (err)
                {
                    console.error(err.message);
                    reject(err.message);
                }
                else
                {  
                    this.connected = true;
                    this.database = db.db(process.env.DB_NAME);
                    console.log("MongoDB connected!\n");
                    resolve();
                } 
            });  
        })
    }

    newID()
    {
        let ObjectID = mongo.ObjectId;

        return new ObjectID();
    }

    objectID(id)
    {
        let ObjectID = mongo.ObjectId;

        try
        {
            if(id)
            {            
                return new ObjectID(id);
            }
            else
            {
                return new ObjectID();
            } 
        }
        catch(err)
        {
            console.log(err)
            return null
        }
    }

    ObjectId(id)
    {
        let ObjectID = mongo.ObjectId;

        try
        {
            if(id)
            {            
                return new ObjectID(id);
            }
            else
            {
                return new ObjectID();
            } 
        }
        catch(err)
        {
            console.log(err)
            return null
        }
    }

    NumberInt(number)
    {
        return mongo.Int32(number)
    }
}

const db = new MongoDB();
db.connect()

export default db;