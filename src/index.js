const express = require('express');
const  mongoose = require('mongoose');
const app = express();
//const PORT = 3000;
const env = require('dotenv').config;
const mongodb = 'mongodb+srv://Devendra:Deva0077@cluster0.ihd6m6r.mongodb.net/Build?authMechanism=SCRAM-SHA-1';

app.listen(Process.env.PORT,(
    console.log("Application is running on",PORT)
    
))
mongoose.set('strictQuery', false);

mongoose.connect(mongodb,{ useNewUrlParser: true, useUnifiedTopology: true },(err)=>{
    if(err){
        console.log(`unable to connect with database":`,err);
    }
    else{
        console.log("\n*************MONGODB connected**************\n");
    }
})
 
