const mongoose= require("mongoose")

const Schema=mongoose.Schema

const newSchema= new Schema ({
    name:{type:String,
    required:true},
    age:{type:Number,
        required:true},
    mail:{type:String,
        required:true,
         unique:true}, 
    phone:{type:Number,
    required:true}       
})

const User= mongoose.model("User",newSchema)
module.exports=User