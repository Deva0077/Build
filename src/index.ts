const express = require('express');
const  mongoose = require('mongoose');
const app = express();
require('dotenv').config();


app.listen(process.env.PORT,(
    console.log("Application is running on",process.env.PORT)
    
))

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser: true, useUnifiedTopology: true },(err : any)=>{
    if(err){
        console.log(`unable to connect with database":`,err);
    }
    else{
        console.log("\n*************MONGODB connected**************\n");
    }
})
 
