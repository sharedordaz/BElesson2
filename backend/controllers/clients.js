const connection = require("../db/connect.js") 

const getAllContacts = async () => {
  const uri = process.env.DB_URI;
  let mongoclient;

  try{
    mongoclient = await connection.dbConnect(uri);
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

module.exports = {
  getAllContacts
}
