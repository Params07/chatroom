const express = require('express');
const cors = require('cors');
const pool = require('./database');
const Str = require('@supercharge/strings')
const random = Str.random()  
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || '5000';
app.listen(port,()=>{
    console.log("hello");
})

const roomName = Str.random(8);
console.log(roomName);

app.get('/newDatabse',async(res,req)=>
{
    try {
       res.json('hello');
        
    } catch (error) {
        
    }
})

