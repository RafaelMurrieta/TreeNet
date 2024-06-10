
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://RafaelMurrieta:6iVJdQfe3JC4qHPq@treedevs.mi9s3ek.mongodb.net/?retryWrites=true&w=majority&appName=TreeDevs";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
