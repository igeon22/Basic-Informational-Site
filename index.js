const express = require("express");
const fs = require("fs")
const app = express()
const port = 8080



app.get("/",(req,res)=>{
	res.send(fs.readFileSync("./index.html",'utf8'))
})

app.get("/contact-me",(req,res)=>{
	res.send(fs.readFileSync("./contact-me.html","utf8"))
})

app.get("/about",(req,res)=>{
	res.send(fs.readFileSync("./about.html","utf8"))
})

app.use((req,res)=>{
	res.status(404).send(fs.readFileSync("./404.html","utf8"))
	res.status(500).send(fs.readFileSync("./404.html","utf8"))
})

app.listen(port,()=>{
	console.log(`App opened on port: ${port}`);
})