const express = require("express")
const app = express()
const port = process.env.PORT || 3000

const mensagens = require("./src/mensagens.json")

app.get("/mensage",(req,res)=>{
    return res.json(mensagens)
})

app.listen(port,()=>{
    console.log("servidor esta rodando ...")
})