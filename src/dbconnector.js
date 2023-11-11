const { MongoClient } = require('mongodb');
const username = "test";
const password = "test";

const uri = `mongodb+srv://${username}:${password}@cluster0.piyp7kc.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri);

let query = {discord: "tester"}; //
async function run(query) {
  try {
    await client.connect();
    const db = client.db('matchmaker');
    const collection = db.collection('gamers');

    // Execute the query
    const first = await collection.find(query).toArray();
    console.log(first);
  } finally {
    // Close the database connection when finished or an error occurs
    await client.close();
  }
}
run(query).catch(console.error);