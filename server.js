const express=require('express')
const app=express()

app.get('/',(req,resp)=>{
    resp.sendFile('public/index.html',{root:__dirname})
})

// app.get('/',(req,resp)=>{
//     resp.sendFile('public/index.html',{root:__dirname})
// })


app.listen(300,()=>{
console.log("server started")
})