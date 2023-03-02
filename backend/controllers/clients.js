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
    const uri = process.env.DB_URI;
    let mongoclient;
  //get GET userId (from URL) req.params = $_GET in PHP
  const userId = new ObjectId(req.params.id);

  //Connect to mongodb
  mongoclient = await connection.dbConnect(uri);
  result = await mongoclient.db("backend2").collection('contacts').find({ _id : userId });
  result.toArray().then( (lists) =>{
    console.log('Single Contact Data example: \nId: ' + lists[0]);
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  })
}

const createNew = async (req ,res, next) =>{
  
  const uri = process.env.DB_URI;
  let mongoclient = connection.dbConnect(uri);
  const contactsCOL = mongoclient.db("backend2").collection("contacts");

  res.send(`POST from function is working\n POST BODY: ${req.body.firstName}`);
 
  //Getting POST from req.body (the body of a request) which is similar to $_POST in PHP (but not the same!)
  //all requests have a HEAD and a BODY
  const doc = { firstName : req.body.firstName, 
                lastName : req.body.lastName,
                email : req.body.email,
                favoriteColor : req.body.favoriteColor,
                birthday : req.body.birthday
              };
  //const result = await contactsCOL.insertOne(doc);
  if (response.acknowledged){
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || 'Some error occurred while creating the contact.');
  }
  //console.log(`A document was inserted with the _id ${result.insertedId}`)
}

const updateCont = async (req, res, next) =>{
  res.send("PUT from function is working");
}
const delCont = async (req, res, next) =>{
  res.send("DELETE from function is working");


}

module.exports = {
  getAllContacts,
  getSingle,
  createNew,
  updateCont,
  delCont
}
