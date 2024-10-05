const mongoose = require("mongoose");


const studentdetailsschema = mongoose.Schema({


    Username : {type : String  , required : false  , unique : false} ,
password : {type : String , required : false},
email : { type : String , required : false , unique : false} ,
phonenumber : {type : Number  ,unique : false},
studentdetails :{type : String , unique : false }


    
},
{timestamps : true}
);











const studentdetailsmodel = mongoose.model("studentdetails" , studentdetailsschema);



module.exports = { studentdetailsmodel
};