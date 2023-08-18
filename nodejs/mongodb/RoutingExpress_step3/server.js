const app = require('./src/app')
const connectDB = require("./src/db/connect")

const PORT = process.env.PORT || 3000

const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = process.env.MONGO_URL;


/***
const client = new MongoClient(url);

// Database Name
const dbName = 'myfirstProject';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('documents');

  // the following code examples can be pasted here...
  const insertResult = await collection.insertMany([{ task: "task1", completed: false }, { task: "task2", completed: true }]);
  console.log('Inserted documents =>', insertResult);

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
*/

const main = async () => {
    try{
        await connectDB(url)
        app.listen(PORT)
    } catch(e){
        console.log(e)
    }
}

main()



