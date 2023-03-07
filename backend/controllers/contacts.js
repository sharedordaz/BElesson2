const mongoclient = require("../db/connect.js"); 
const ObjectId = require('mongodb').ObjectId;


const getAllContacts = async (req, res, next) => {

  try{
    dbo = mongoclient.getDb().db("backend2");
    contactsCOL =  dbo.collection('contacts');
    result = await contactsCOL.find();
    resultArray = result.toArray().then( (lists) =>{
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
    });
    }
  catch (e){
      console.log("Funny error" + e )
  }
}

const getSingle = async (req, res, next) => {
  try {
    //get GET userId (from URL) req.params = $_GET in PHP
    const userId = new ObjectId(req.params.id);
    result = mongoclient.getDb().db("backend2").collection('contacts').find({ _id : userId })
    await result.toArray().then( (lists) =>{
    console.log('Single Contact Data example: \nId: ' + lists[0]);
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  })    
  } catch (error) {
    res.status(404).send("<p>Couldn't access to database!\n <hr>Error: </p>\t" + error);
  }
}

const createNew = async (req, res) =>{
   //Getting POST from req.body (the body of a request) which is similar to $_POST in PHP (but not the same!)
  //all requests have a HEAD and a BODY 
  const doc = { firstName : req.body.firstName, 
                lastName : req.body.lastName,
                email : req.body.email,
                favoriteColor : req.body.favoriteColor,
                birthday : req.body.birthday
              };

  const contactsCOL = mongoclient.getDb().db("backend2").collection("contacts");

  //res.send(`POST from function is working\n POST BODY FIRST NAME: ${req.body.firstName}`);
    
  const result = await contactsCOL.insertOne(doc);
  if (result.acknowledged){
    res.status(201).json(result);
  } else {
   res.status(500).json(result.error || 'Some error occurred while creating the contact.');
  }
  console.log(`A document was inserted with the _id ${result.insertedId}`)
}

const updateCont = async (req, res, next) =>{
  //res.send("PUT from function is working");
  const userId = new ObjectId(req.params.id);
  // be aware of updateOne if you only want to update specific fields
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };

  const contactsCOL = mongoclient.getDb().db("backend2").collection("contacts");
  const result = await contactsCOL.replaceOne( {_id: userId }, contact);
    if (result.modifiedCount > 0) {
    res.status(204).send("PUT request successful");
  } else {
    res.status(500).json(result.error || 'Some error occurred while updating the contact.');
  }
}
const delCont = async (req, res, next) =>{
  const userId = new ObjectId(req.params.id);
  
  const contactsCOL = mongoclient.getDb().db("backend2").collection("contacts");
  const result = await contactsCOL.deleteOne({ _id: userId }, true);

  if (result.deletedCount > 0) {
    res.status(204).send("DELETE request sucessful");
  } else {
    res.status(500).json(result.error || 'Some error occurred while deleting the contact.');
  }
};



module.exports = {
  getAllContacts,
  getSingle,
  createNew,
  updateCont,
  delCont
}
