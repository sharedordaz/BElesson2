const connection = require("../db/connect.js"); 
const ObjectId = require('mongodb').ObjectId;


const getAllContacts = async (req, res, next) => {
  const uri = process.env.DB_URI;
  let mongoclient;

  try{
    mongoclient = await connection.dbConnect(uri);
    dbo = mongoclient.db("backend2");
    contactsCOL =  dbo.collection('contacts');
    result = await contactsCOL.find({});
    resultArray = result.toArray().then( (lists) =>{
      console.log('Contacts retreived Data example: \nFirstName: ' + lists[0]["firstName"]);
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
    });
    }
  catch (e){
      console.log("Funny error" + e )
  }
   finally{
     setTimeout(() => {mongoclient.close()}, 1500)
  }
}

const getSingle = async (req, res, next) => {
  const userId = new ObjectId(req.params.id);
  mongoclient = await connection.dbConnect(uri);
  result = await mongoclient.db("backend2").collection('contacts').find({ _id : userId });
  result.toArray().then( (lists) =>{
    console.log('Single Contact Data example: \nId: ' + lists[0]);
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  })

}

module.exports = {
  getAllContacts,
  getSingle
}
