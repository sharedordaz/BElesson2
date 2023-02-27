const { MongoClient } = require('mongodb');

const dbConnect = async (uri) => {
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


const executeCRUDquery = async () => {
  const uri = process.env.DB_URI;
  let mongoclient;

  try{
    mongoclient = await dbConnect(uri);
    dbo = mongoclient.db("backend2");
    contactsCOL =  dbo.collection('contacts');
    result = await contactsCOL.find({});
    resultArray = result.toArray().then( (lists) =>{
    console.log('Contacts retreived Data example: \nFirstName: ' + lists[0]["firstName"]);});
    }
  catch (e){
      console.log("Funny error" + e )
  }
   finally{
     setTimeout(() => {mongoclient.close()}, 1500)
  }
}

//executeCRUDquery();

module.exports = {
  dbConnect,
  executeCRUDquery,
};
