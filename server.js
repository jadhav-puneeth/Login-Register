const express=require('express')
var app=express()
const cors=require('cors')

app.use(express.json())
app.use(cors())

const userroutes=require('./userroute/userroute.js');
app.use('',userroutes);

app.listen(9000,(err)=>
{   
    if(err)
        console.log(err);
    else
        console.log("Success")
});
