// utils/database.js
import { MongoClient, ServerApiVersion } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

async function dbConnect() {
    await client.connect();
    const db = client.db(process.env.MONGODB_DB); 
    return { db, client };
}

export { dbConnect };