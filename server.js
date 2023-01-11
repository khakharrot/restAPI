const express= require ("express")
const app= express()
const port=3200

app.use(express.json())
const connect= require('./Config/Connect')

connect()

app.use("/Users",require("./Routes/search"))
app.listen(port,(err)=>{
    err? console.log(err):console.log(`server running on ${port}`)
})