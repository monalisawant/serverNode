
const express=require("express")
const app=express()
const port=8081
app.get("/",(req,res)=>{
    res.status(200).send("Homepage")
})
app.get("/welcome",(req,res)=>{
    res.status(200).send("Welcome to Dominos!")
})
app.get("/contact",(req,res)=>{
    res.status(200).send({  
        phone: '18602100000', 
        email: 'guestcaredominos@jublfood.com' 
       }
       )
})
app.get("*",(req,res)=>{
    res.status(404).send("status 404")
})
app.listen(port,()=>{
    console.log(`The server running on ${port}`)
})

