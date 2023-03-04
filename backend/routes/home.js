const express = require('express');

const router = express.Router();

const controller = require("../controllers/contacts.js")

const path = require('path');


let homeHTML = '<h1>welcome to home!</h1>'
homeHTML +=  '<br> <button onclick="location.href=`/contacts`" type="button">See all contacts</button>'; 
homeHTML += '<br><br><label for="index">Enter id: </label><input id="id_index_home" type="text" required>';
homeHTML +=  '<br> <button id="id_index_button"type="button">Enter to an index</button>'; 
homeHTML += '<script>';
homeHTML += 'let id_index_home = document.getElementById("id_index_home").value;\n';
homeHTML += 'document.getElementById("id_index_button").addEventListener("click", () => {location.href= "/contacts/" + id_index_home});';
homeHTML += 'console.log(id_index_home);</script>';
              


router.get('/', (req, res) => {
 //res.sendFile('../../frontend/test.html', {root: '.'});
 res.send(homeHTML);
});




module.exports = router;

