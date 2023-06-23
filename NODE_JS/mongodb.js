//MongoClient -> The MongoClient Class is where the initial connection to the MongoDB server is defined.
const { MongoClient } = require('mongodb');
const url = 'mongodb+srv://root:root@cluster0.fncoiyy.mongodb.net/';
const database = 'Employee';
const client = new MongoClient(url);

async function establishConnection() {
    let result = await client.connect();

    let db = result.db(database);
    return collection = db.collection('Data');

}
module.exports = establishConnection;