const express= require("express");
const app= express();
const mongoose= require("mongoose");
require('dotenv').config();
const cors= require("cors");

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors({
    origin:"http://localhost:5173/",
    allowedHeaders:["Content-type", "Authorization"],
}));

const PORT=process.env.PORT || 5000;
const MONGO_URI= process.env.MONGO_URI;

const dbConnect=async()=>{
    try{
        await mongoose.connect(MONGO_URI);
        console.log("database connected successfully")
    }catch(error){
        console.log(error);
    }

}

dbConnect();

console.log(PORT)

app.listen(PORT,()=>{
    console.log(`server is listening on port no ${PORT}`)
})
