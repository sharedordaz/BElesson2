const { MongoClient } = require('mongodb');

async function dbConnect(uri) {
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

async function executeCRUDquery(){
  const uri = process.env.DB_URI;
  let mongoclient;

  try{
    mongoclient = await dbConnect(uri);
  } finally{
    await mongoclient.close();
    console.log('Query finished');
  }
}

//executeCRUDquery();
