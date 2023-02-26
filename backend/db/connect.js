const { MongoClient } = require('mongodb');

async function dbConnect() {
 
  const uri = "mongodb+srv://sharedordaz:sharedverde1@cluster0.nzpdodr.mongodb.net/?retryWrites=true&w=majority";

   try {
      const mongoclient = new MongoClient(uri);
      console.log('Conecting to a new Mongo Client instance');
      //This is done after the function was solved (await)
      // Connect to the MongoDB cluster
      await mongoclient.connect();
      console.log("Succesfully connected to Mongo DB!");
      return mongoclient;

    } catch (e) {
        console.error("Connection to Mongo DB failed", e);
        process.exit();
    } 
}

//dbConnect();
