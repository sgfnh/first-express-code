const http=require("http")
const express=require("express")
const app=express()
app.use((req,resp,next)=>{
    console.log("POOJA")
    next()
})
app.use((req,resp,next)=>{
    console.log("PATEL")
    resp.send('</h3>hell</h3>')
})
const server=http.createServer(app);
server.listen(5000)
