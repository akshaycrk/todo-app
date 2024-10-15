const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')

const userRoutes = require("./Routes/userRoutes")

const app = express()


//database connection
mongoose.connect('mongodb://localhost:27017/mydatabase').then((res)=>{
    console.log('db connection successfull');
    
}).catch((err)=>{
    console.log(err);
    
})


app.use(cors({
    origin:'*'
}))
app.use(morgan('dev'))
app.use(express.json())
app.use("/",userRoutes)


//port connection
app.listen(4000,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Server starts on port 4000");
        
    }
})