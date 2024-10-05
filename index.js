const {createServer} = require("node:http"); 
// const {UserRegistrationModel , productdetailsmodel , cartdetailsmodel}  = require("./model/taskmodel")
const express = require("express");
const {studentdetailsmodel} = require("./model/studentdetails")
require('dotenv').config();

const bodyparser = require("body-parser");
const cors = require("cors")
const {DBconnection} =  require("./dbconfig");
const { log } = require("node:console");
const httpserver = express();
// DBconnection();
httpserver.use(bodyparser.json());
httpserver.use(cors());

DBconnection();
//  httpserver.use("/" , require("./controllers/taskcontroller"))
      
var users  = [];


/// post method for cart
httpserver.post("/add" , (req , res)=>{

  
 console.log(`hit fn`);
 
   
   
   
                     });


/// post method for cart
httpserver.post("/addstudentdetails" , (req , res)=>{

  const newstudentdetails = new studentdetailsmodel(req.body);
 console.log(req.body);
 console.log(`niew`);
 console.log(newstudentdetails);
 try{
 
   if(newstudentdetails){
     newstudentdetails.save();
   
     res.send({message : "student details saved !!!"})
           
   }
   else{
 
     res.status(500).json({message : " details not saved "})
           
 
 
   }
   
 }
   catch(err){
 console.log(`${err} error logged here`);
 
 
   }
 
 
 
                   });

      


// starts a simple http server locally on port 3000
httpserver.listen(process.env.PORT, process.env.HOSTNAME, () => {
  console.log('Listening on 127.0.0.1:3000');
});


// httpserver.listen(3000, '127.0.0.1', () => {
//     console.log('Listening on http://127.0.0.1:3000');
//   });

// run with `node server.mjs`
