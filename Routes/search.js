const express= require("express")
const router=express.Router()
const User= require("../Model/model")

//list of all the users
router.get("/",async (req,res)=>{
    const persons=await User.find()
    res.send({msg:"users found",persons})
})

// add user

router.post("/add",async (req,res)=>{
    const {name,age,mail,phone}=req.body
    const newUser=await new User({name,age,mail,phone})
    newUser.save()
    res.send({msg:"user added",newUser})
})

// update user

router.put("/edit/:_id",async (req,res)=>{
   const {_id}=req.params
   const contact=await User.findOneAndUpdate({_id},{$set:req.body})
   res.send({msg:"user updated",contact})   
})

// delete user

router.delete ("/delete/:_id",async (req,res)=>{
    const {_id}=req.params
    const contact=await User.findOneAndDelete({_id})
    res.send({msg:"user deleted",contact}) 
})

module.exports=router 